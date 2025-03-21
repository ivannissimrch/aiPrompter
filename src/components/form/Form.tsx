"use client";

import { Inputs } from "@/app/promptInput/page";
import { once } from "events";
import { motion } from "framer-motion";
export default function Form({ inputs }: { inputs: Inputs[] }) {
  function scrollToNextComponent(input: Inputs, idx: number) {
    inputs[idx + 1].inputRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }

  function scrollToPrevComponent(input: Inputs, idx: number) {
    inputs[idx - 1].inputRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }

  const variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <form
      onSubmit={async (event) => {
        event?.preventDefault();
      }}
      className="flex flex-col  w-full  p-10 items-center"
    >
      {inputs.map((input, idx) => (
        <motion.div
          key={input.title}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={variants}
          className="w-full"
        >
          <div
            className={`${
              idx === 0 ? "h-[90vh]" : "h-[100vh]"
            } w-full flex flex-col justify-center`}
            ref={input.inputRef}
          >
            <div className="flex flex-col items-center text-black">
              <label className="bg-white  m-2">{input.title}</label>
              <input
                type="text"
                required
                name={input.title}
                className="p-4 bg-[#CAD2C5] w-1/2 flex"
                placeholder={input.title}
              />
              {idx < inputs.length - 1 ? (
                <div className="w-1/2 flex justify-evenly">
                  <button
                    className={`${idx === 0 ? "hidden" : "visible"}`}
                    type="button"
                    onClick={() => scrollToPrevComponent(input, idx)}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToNextComponent(input, idx)}
                  >
                    Next
                  </button>
                </div>
              ) : (
                <button className=" w-1/2 p-4 m-2 h-12  text-black underline">
                  ReView
                </button>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </form>
  );
}
