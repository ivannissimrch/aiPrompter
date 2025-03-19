"use client";

import { RefObject, useRef } from "react";
import Form from "./components/Form";

export interface Inputs {
  title: string;
  inputRef: RefObject<HTMLDivElement | null>;
}

export default function Home() {
  const personaRef = useRef<HTMLDivElement | null>(null);
  const contextRef = useRef<HTMLDivElement | null>(null);
  const taskRef = useRef<HTMLDivElement | null>(null);
  const outputRef = useRef<HTMLDivElement | null>(null);
  const constrainRef = useRef<HTMLDivElement | null>(null);

  const inputs: Inputs[] = [
    { title: "Persona", inputRef: personaRef },
    { title: "Context", inputRef: contextRef },
    { title: "Task", inputRef: taskRef },
    { title: "Output", inputRef: outputRef },
    { title: "Constrain", inputRef: constrainRef },
  ];

  return (
    <div className="h-full bg-amber-500 ">
      {/* <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Ai Prompter
          </h1>
        </div>
      </header> */}
      <main className="bg-amber-300">
        <Form inputs={inputs} />
      </main>
    </div>
  );
}
