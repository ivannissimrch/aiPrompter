import Form from "./components/Form";

export default function Home() {
  const inputs = ["Persona", "Context", "Task", "Output", "Constraint"];

  return (
    <main className="flex  items-center justify-center w-full h-screen  bg-[#2F3E46]">
      <Form inputs={inputs} />
      {/* <textarea className="w-1/2 p-to h-full m-8 bg-white"></textarea> */}
    </main>
  );
}
