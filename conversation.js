const kuzu = require("kuzu");

const generateAIReply = require("./groq");

// Connect to Kuzu
const db = new kuzu.Database("./kuzuDB");
const conn = new kuzu.Connection(db);

// Load personalities from Kuzu
async function loadAgents() {

  const result = await conn.query(`
    MATCH (p:Personality)
    RETURN p.name, p.memory;
  `);

  const rows = await result.getAll();

  return rows.map(row => ({
    name: row["p.name"],
    memory: row["p.memory"]
  }));
}

// Main simulation
async function simulateConversation() {

  const agents = await loadAgents();

  let conversation = [];

  // 2 discussion rounds
  for (let round = 0; round < 2; round++) {

    for (let agent of agents) {

      // Generate REAL AI reply
      const aiReply = await generateAIReply(
        agent.memory,
        conversation
      );

      const finalReply = `${agent.name}: ${aiReply}`;

      conversation.push(finalReply);
    }
  }

  return {
    topic: "Weekend Planning",
    totalAgents: agents.length,
    conversation
  };
}

module.exports = simulateConversation;