import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  }from"@google/generative-ai";
  
  const apiKey ="AIzaSyC76LADU5MlhApmjnCcM-6PssgltWJSF7I"
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-exp-1114",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
    return result.response.text();
  }
  
  export default run;