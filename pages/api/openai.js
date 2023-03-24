//API FOLDER USES EXPRESS JS 

import {openai} from "../../lib/openai";

export default async function handler(req, res) {
    if(req.method !== "GET") {
        res.status(405).json({message: "Method Not Allowed!"});
    }
    const {name, name2} = req.query;
    console.log(name, name2);
    
    let chatResponse = "";
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-002", //3 levels to each model, but more expensive each model. different models have different benefits
            prompt: "What are the top 10 fastest dogs", //what the user asks - this is a parameter 
            max_tokens: 1024, //how many words it can process. Cannot just type in any number 
            temperature: 0.6, //number between 0 and 1. the higher the number, the more creative 
        });
        console.log(response.data.choices[0].text);
    }
    catch(error) {
        console.log(error);
    }
    res.status(200).json({message: "Message Success!"}); //res status goes at the bottom (there can be multiple)
}