import { Inputs } from "./Form";

interface InputProps {
  input: Inputs;
  updateInputsValues: (newValue: string, id: string) => void;
  resetInputsValues: (id: string) => void;
}

export default function Input({
  input,
  updateInputsValues,
  resetInputsValues,
}: InputProps) {
  return (
    <div
      key={input.title}
      className={` w-full flex  justify-evenly bg-blue-600 m-2`}
    >
      <label className="bg-white  m-2  w-2/6 text-black">{input.title}</label>
      <input
        onChange={(event) => updateInputsValues(event.target.value, input.id)}
        type="text"
        spellCheck
        required
        value={input.question}
        name={input.title}
        className="  p-4 bg-white w-4/6"
        placeholder={input.title}
      />
      <button type="button" onClick={() => resetInputsValues(input.id)}>
        Reset Input
      </button>
    </div>
  );
}
