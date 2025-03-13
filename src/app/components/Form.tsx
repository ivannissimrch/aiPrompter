"use client";

import { getAiAnswer } from "@/helpers/getAiAnswer";
import { useRef, useState } from "react";
import { Inputs } from "../page";

export default function Form({ inputs }: { inputs: Inputs[] }) {
  const [aiMessage, setAiMessage] = useState("");
  const submitRef = useRef<HTMLButtonElement | null>(null);

  function scrollToComponent(input: Inputs, idx: number) {
    if (idx === inputs.length - 1) {
      submitRef.current?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    inputs[idx + 1].inputRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }
  return (
    <form
      onSubmit={async (event) => {
        event?.preventDefault();
        // const aiAnswer = await getAiAnswer(testPersonaMessage);
        // setIsOpen(true);
        // setAiMessage(aiAnswer);
      }}
      className="flex flex-col  w-full  p-10 items-center"
    >
      {inputs.map((input, idx) => (
        <div
          key={input.title}
          className={`${
            idx === 0 ? "h-[90vh]" : "h-[100vh]"
          } w-full flex flex-col justify-end`}
          ref={input.inputRef}
        >
          <label className="bg-white  m-2  flex justify-between text-black">
            {input.title}
            <input
              type="text"
              required
              name={input.title}
              className="  p-4 bg-[#CAD2C5] w-1/2"
              placeholder={input.title}
            />
            <button type="button" onClick={() => scrollToComponent(input, idx)}>
              Next
            </button>
          </label>
        </div>
      ))}
      <button
        ref={submitRef}
        className="bg-white w-1/2 p-4 m-2 h-12 rounded text-black"
      >
        Submit
      </button>
    </form>
  );
}
