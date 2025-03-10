"use client";

import { getAiAnswer } from "@/helpers/getAiAnswer";

export default function Form({ inputs }: { inputs: string[] }) {
  return (
    <form
      onSubmit={(event) => {
        event?.preventDefault();
        getAiAnswer();
      }}
      className="flex flex-col items-center w-1/2 p-10"
    >
      {inputs.map((input) => (
        <label key={input} className="bg-white p-2 m-2">
          {input}
          <input
            type="text"
            required
            name={input}
            className=" m-2 p-2 bg-[#CAD2C5]"
          />
        </label>
      ))}
      <button className="bg-white w-1/2 p-4 m-2 h-12 rounded">Submit</button>
    </form>
  );
}
