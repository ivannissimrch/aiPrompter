"use client";

import Form from "@/components/form/Form";
import StepperC from "@/components/stepper/StepperC";
import { RefObject, useRef, useState } from "react";

export interface Inputs {
  title: string;
  inputRef: RefObject<HTMLDivElement | null>;
}

export default function PromptInput() {
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
  //add state to handle active step.
  const [activeStep, setActiveStep] = useState(0);

  function handleNext() {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  function handleStepperClick(index: number) {
    setActiveStep(index);
  }

  return (
    <div className="h-full border-white overflow-y-scroll">
      <header className="bg-white text-black  mx-auto w-full px-4 py-6 sm:px-6 lg:px-8 absolute flex justify-center ">
        <StepperC
          steps={inputs.map((input) => input.title)}
          activeStep={activeStep}
          handleNext={handleNext}
          handleBack={handleBack}
          handleReset={handleReset}
          handleStepperClick={handleStepperClick}
        />
      </header>
      <main className="">
        <Form
          inputs={inputs}
          activeStep={activeStep}
          handleNext={handleNext}
          handleBack={handleBack}
          handleReset={handleReset}
        />
      </main>
    </div>
  );
}
