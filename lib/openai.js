import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  headers: {
    "User-Agent": "",
  },
});

export const openai = new OpenAIApi(configuration);





