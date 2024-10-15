// Fetching content from Cosmocloud and using Gemini for scan relevent document related query
// and for Prompt Design or to Train modal 

import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
const projectId = import.meta.env.VITE_APP_PROJECT_ID;
const environmentId = import.meta.env.VITE_APP_ENVIRONMENT_ID;
const geminiAPIKey = import.meta.env.VITE_APP_API_KEY;



const genAI = new GoogleGenerativeAI(geminiAPIKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

// // errorDataSchema for jsonSchema which is used to get json response
// const errorDataSchema = {
//     type: 'object',
//     properties: {
//         title: { type: 'string' },
//         type: { type: 'string' },
//         problemDefinition: { type: 'string' },
//         problemCauses: { type: 'string' },
//         problemSolution: { type: 'string' },
//         codeSnippets: { type: 'string' },
//         embeddingsLinks: { type: 'array', items: { type: 'string' } },
//     },
// };

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
    // responseSchema: errorDataSchema,
};

async function runSemanticSearch(prompt) {

    try {
        // Query Cosmocloud for relevant documents
        const response = await fetch(`https://free-ap-south-1.cosmocloud.io/development/api/errorData/_search?query=${prompt}&limit=1&offset=0`, {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'projectId': projectId,
                'environmentId': environmentId
            },
        })

        const relevantDocuments = await response.json();
        // console.log(relevantDocuments);

        const processedData = relevantDocuments.response5.map(response => ({
            title: response.data[0].title,
            type: response.data[0].type,
            problemDefinition: response.data[0].problemDefinition,
            problemCauses: response.data[0].problemCauses,
            problemSolution: response.data[0].problemSolution,
            codeSnippets: response.data[0].codeSnippets,
            embeddingsLinks: response.data[0].embeddingsLinks
        }));
        // console.log(processedData);


        const chatSession = model.startChat({
            generationConfig,
            history: [
                {
                    role: "user",
                    parts: [
                            { text: `Generate a comprehensive solution json response for this prompt.\n\nHere is the json template to use this to generate json response:\n\n'''json\n{\n\"title\": \"${processedData[0].title}\",\n\"type\": \"${processedData[0].type}\",\n\"problemDefinition\": \"${processedData[0].problemDefinition}\",\n\"problemCauses\": \"${processedData[0].problemCauses}\",\n\"problemSolution\": \"${processedData[0].problemSolution}\",\n\"codeSnippets\": \"${processedData[0].codeSnippets} \",\n\"embeddedLinks\": [${processedData[0].embeddingsLinks.map(link => `- ${link}`).join('\n')}]}\"\n` }
                    ],
                },
            ],
        });

        const result = await chatSession.sendMessage(prompt);
        const geminiResponse = JSON.parse(result.response.text()); // converting plain/text to application/json
        console.log(geminiResponse);


        return geminiResponse;

    } catch (error) {
        console.error("Error: ", error);
    }

}

export default runSemanticSearch;