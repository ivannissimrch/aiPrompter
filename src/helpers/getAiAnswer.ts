import { GoogleGenerativeAI } from "@google/generative-ai";

export async function getAiAnswer(prompt: string) {
  const genAI = new GoogleGenerativeAI(`${process.env.NEXT_PUBLIC_AI_API_KEY}`);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(prompt);
  console.log(result.response.text());
  return result.response.text();
}
