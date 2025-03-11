"use client";

import { getAiAnswer } from "@/helpers/getAiAnswer";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

const testPersonaMessage =
  "give a non inspiritaional message of the day make it funny like a dad joke atleast 3 sentences long";

export default function Form({ inputs }: { inputs: string[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [aiMessage, setAiMessage] = useState("");
  return (
    <>
      <form
        onSubmit={async (event) => {
          event?.preventDefault();
          const aiAnswer = await getAiAnswer(testPersonaMessage);
          setIsOpen(true);
          setAiMessage(aiAnswer);
        }}
        className="flex flex-col items-center w-full p-10 bg-slate-400"
      >
        {inputs.map((input) => (
          <label
            key={input}
            className="bg-white  m-2 w-full flex justify-between text-black"
          >
            {input}
            <input
              type="text"
              required
              name={input}
              className="  p-4 bg-[#CAD2C5] w-1/2"
              placeholder={input}
            />
          </label>
        ))}
        <button className="bg-white w-1/2 p-4 m-2 h-12 rounded text-black">
          Submit
        </button>
      </form>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {aiMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsOpen(false)} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
