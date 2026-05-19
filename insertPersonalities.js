const kuzu = require("kuzu");
const fs = require("fs");
const path = require("path");

const db = new kuzu.Database("./kuzuDB");
const conn = new kuzu.Connection(db);

async function insertPersonalities() {

  const files = [
    "sai.txt",
    "arjun.txt",
    "neha.txt",
    "rahul.txt"
  ];

  for (const file of files) {

    const memory = fs.readFileSync(
      path.join(__dirname, "personalities", file),
      "utf-8"
    );

    const name = file.replace(".txt", "");

    await conn.query(`
      CREATE (p:Personality {
        name: "${name}",
        memory: "${memory.replace(/\n/g, " ")}"
      });
    `);

    console.log(`${name} inserted`);
  }
}

insertPersonalities();