"use client";

import { getAiAnswer } from "@/helpers/getAiAnswer";

const testPersonaMessage = `Im a frontend developer who is at the beginning of your career and is looking to applywhat youve learned to build practical experience to help you get noticed inthe job market, The information provided should assume that I am a Frontend Web Developer Provide a list of websites for organizations that provide programs and
services which will help me transform what I've learned into experience that
other job applicants will not have.who understands the technical aspects of what is needed to build websites.But, I have not worked in team projects with individuals in different roles. The tone should be informal and the list of websites should include a link
to the site, it's name, and cost information. Avoid generating lots of text only a summary of the websites are needed. Also,
responses should be tailored to readers with a high school level of education.
Avoid overly technical responses.`;

export default function Form({ inputs }: { inputs: string[] }) {
  return (
    <form
      onSubmit={async (event) => {
        event?.preventDefault();
        const aiAnswer = await getAiAnswer(testPersonaMessage);
        alert(aiAnswer);
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
