import Form from "./components/Form";

export default function Home() {
  const inputs = ["Persona", "Context", "Task", "Output", "Constraint"];

  return (
    <div className="min-h-full bg-amber-50">
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Ai Prompter
          </h1>
        </div>
      </header>
      <main className="bg-blue-200 min-h-screen">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8  ">
          <Form inputs={inputs} />
        </div>
      </main>
    </div>
  );
}
