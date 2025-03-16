"use client";

import { getAiAnswer } from "@/helpers/getAiAnswer";
import { FormEvent, useState } from "react";
import Input from "./Input";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import ReactMarkdown from "react-markdown";
import { v4 as uuidv4 } from "uuid";
import storeToLocalStorage from "@/helpers/storeToLocalStorage";
import getDataFromLocalStorage from "@/helpers/getDataFromLocalStorage";
import { string } from "zod";

export interface Inputs {
  id: string;
  title: string;
  question: string;
}

export interface Store {
  inputValues: Inputs[];
  userQuestion: string;
  aiAnswer: string;
  id: string;
}

export interface PrevConversations {
  user: string;
  model: string;
}

const initialStoreState: Store = {
  inputValues: [
    {
      id: "q1",
      title: "Describe who the result will be tailored for",
      question: "",
    },
    { id: "q2", title: "Provide background information", question: "" },
    { id: "q3", title: "Provide information needed.", question: "" },
    {
      id: "q4",
      title: "Defines how you want the AI tool to respond",
      question: "",
    },
    { id: "q5", title: "Provide  boundaries", question: "" },
  ],
  userQuestion: "",
  aiAnswer: "",
  id: uuidv4(),
};

export default function Form() {
  const [storeState, setStoreState] = useState<Store>(initialStoreState);
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    // const conversationHistory = getDataFromLocalStorage("previousConversations")
    //   .map(
    //     (conversation: { conversation: string[] }) => conversation.conversation
    //   )
    //   .join(" ");

    const userPrompt = await updateQuestion();
    const aiAnswer = await getAiAnswer(userPrompt);
    updateAiAnswer(aiAnswer);
    //reset all input values
    clearAllInputs();

    //update chatHistory
    // const prevConversations: PrevConversations[] | [] = getDataFromLocalStorage(
    //   "previousConversations"
    // );

    // const currentConversation = {
    //   conversation: `user asked ${userPrompt} and your response was ${aiAnswer}`,
    // };
    // prevConversations.unshift(currentConversation);
    // storeToLocalStorage("previousConversations", prevConversations);
  }

  async function updateInputsValues(newValue: string, id: string) {
    setStoreState((prev) => ({
      ...prev,
      inputValues: prev.inputValues.map((input) =>
        input.id === id ? { ...input, question: newValue } : input
      ),
    }));
  }

  async function resetInputsValues(id: string) {
    setStoreState((prev) => ({
      ...prev,
      inputValues: prev.inputValues.map((input) =>
        input.id === id ? { ...input, question: "" } : input
      ),
    }));
  }

  async function clearAllInputs() {
    setStoreState((prev) => ({
      ...prev,
      inputValues: prev.inputValues.map((input) => ({
        ...input,
        question: "",
      })),
    }));
  }

  async function updateQuestion() {
    const userPrompt = storeState.inputValues
      .map((inputValue) => inputValue.question)
      .join(" ");
    setStoreState((prev) => {
      return {
        ...prev,
        userQuestion: userPrompt,
      };
    });
    return userPrompt;
  }

  async function updateAiAnswer(newAnswer: string) {
    console.log(newAnswer);
    setIsMessageOpen(true);
    setStoreState((prev) => {
      return {
        ...prev,
        aiAnswer: newAnswer,
      };
    });
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col  w-full  p-10 items-center h1/2"
      >
        {storeState.inputValues.map((input) => (
          <Input
            key={input.title}
            input={input}
            updateInputsValues={updateInputsValues}
            resetInputsValues={resetInputsValues}
          />
        ))}
        <button className="bg-white w-1/2 p-4 m-2 h-12 rounded text-black">
          Submit
        </button>
      </form>
      <section>
        <Dialog
          open={isMessageOpen}
          onClose={() => setIsMessageOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">AI Response</DialogTitle>
          <DialogContent>
            <ReactMarkdown>{storeState.aiAnswer}</ReactMarkdown>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setIsMessageOpen(false)}>Close</Button>
          </DialogActions>
        </Dialog>
      </section>
    </>
  );
}
