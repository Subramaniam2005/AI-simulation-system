const kuzu = require("kuzu");

// Create database
const db = new kuzu.Database("./kuzuDB");

// Create connection
const conn = new kuzu.Connection(db);

async function setupDatabase() {

  // Create Personality table
  await conn.query(`
    CREATE NODE TABLE IF NOT EXISTS Personality(
      name STRING,
      memory STRING,
      PRIMARY KEY(name)
    );
  `);

  console.log("Kuzu DB setup complete");
}

setupDatabase();