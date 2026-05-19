const express = require("express");
const path = require("path");

const simulateConversation = require("./conversation");

const app = express();

app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// Simulation route
app.post("/simulate", async (req, res) => {

  const result = await simulateConversation();

  res.json(result);

});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});