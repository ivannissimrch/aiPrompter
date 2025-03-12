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
import { RefObject, useState } from "react";
import { Inputs } from "../page";

const testPersonaMessage =
  "give a non inspiritaional message of the day make it funny like a dad joke atleast 3 sentences long";

export default function Form({ inputs }: { inputs: Inputs[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [aiMessage, setAiMessage] = useState("");

  function scrollToComponent(input, idx) {
    inputs[idx + 1].inputRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }
  return (
    <>
      <form
        onSubmit={async (event) => {
          event?.preventDefault();
          // const aiAnswer = await getAiAnswer(testPersonaMessage);
          // setIsOpen(true);
          // setAiMessage(aiAnswer);
          // scrollToComponent();
        }}
        className="flex flex-col  w-full bg-red-500 justify-center p-10"
      >
        {inputs.map((input, idx) => (
          <div
            key={input.title}
            className="h-[78vh] w-full bg-amber-900 m-8"
            ref={input.inputRef}
          >
            <label className="bg-white  m-2 w-full flex justify-between text-black">
              {input.title}
              <input
                type="text"
                required
                name={input.title}
                className="  p-4 bg-[#CAD2C5] w-1/2"
                placeholder={input.title}
              />
              <button onClick={() => scrollToComponent(input, idx)}>
                Next
              </button>
            </label>
          </div>
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
