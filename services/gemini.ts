
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || "";

export const getAIResponse = async (userPrompt: string) => {
  if (!apiKey) {
    return "The assistant is currently resting (API Key missing). Please check your configuration.";
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are the "3am Goma3a AI Opportunity Assessor". 
        Your tone is friendly, expert, and uniquely Egyptian-tech focused. 
        The slogan is "Dall2 el business btaak".
        Your goal is to help businesses identify how AI can improve their operations. 
        Always provide your assessment in two distinct parts:
        1. "The Opportunity": Identify a specific business pain point or area for AI improvement based on what the user said.
        2. "The Strategy": Suggest how 3am Goma3a AI's core services (Business Automation, Custom LLMs, or Data Strategy) could solve it.
        Keep it concise, professional, but full of Egyptian charm.`,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "3am Goma3a's servers are a bit busy right now. Please try again in a moment!";
  }
};
