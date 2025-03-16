import { GoogleGenerativeAI } from "@google/generative-ai";

export async function getAiAnswer(prompt: string) {
  console.log(prompt);
  const genAI = new GoogleGenerativeAI("");
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "You are LCARS  fromStar Trek universe ",
  });

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [
          {
            text: "Hello, I'm testing how this works, can you remember this line here... i need to read google docs today",
          },
        ],
      },
      {
        role: "model",
        parts: [{ text: "Great to meet you. What would you like to know?" }],
      },
    ],
  });

  // const result = await model.generateContent(prompt);
  // return result.response.text();
  const result = await chat.sendMessage(prompt);
  return result.response.text();
}
