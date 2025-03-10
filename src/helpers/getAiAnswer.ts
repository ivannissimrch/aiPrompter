// import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function getAiAnswer() {
  const genAI = new GoogleGenerativeAI(`${process.env.NEXT_PUBLIC_AI_API_KEY}`);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = "Testing say hello in japanese";

  const result = await model.generateContent(prompt);
  console.log(result.response.text());
  // try {
  //   const response = await axios.get("https://api.example.com/data");
  //   console.log(response.data);
  // } catch (error) {
  //   console.error(error);
  // }
}
