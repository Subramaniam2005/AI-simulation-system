const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: "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",
  baseURL: "https://api.groq.com/openai/v1"
});

async function generateAIReply(agentMemory, conversationHistory) {

  try {

    const response = await client.chat.completions.create({

      model: "llama-3.1-8b-instant",

      messages: [

        {
          role: "system",
          content: `
You are an AI personality participating in a group discussion about weekend plans.

Your personality:
${agentMemory}

Speak naturally and realistically.
Keep responses short (1-2 sentences).
`
        },

        {
          role: "user",
          content: `
Conversation so far:
${conversationHistory.join("\n")}

Respond to the discussion.
`
        }

      ],

      temperature: 0.8

    });

    return response.choices[0].message.content;

  }

  catch (error) {

    console.error("GROQ ERROR:", error.response?.data || error.message);

    return "I have nothing to say.";
  }
}

module.exports = generateAIReply;
