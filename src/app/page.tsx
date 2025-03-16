import Form from "./components/Form";

export default function Home() {
  return (
    <div className=" bg-amber-500 ">
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Ai Prompter
          </h1>
        </div>
      </header>
      <main className="bg-amber-300">
        <Form />
      </main>
    </div>
  );
}
