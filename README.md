# Multi-Agent AI Group Chat Simulation

A memory-driven multi-agent AI system where multiple AI personalities dynamically participate in a group discussion using graph-based memory retrieval and LLM-powered responses.

## 🚀 Features

* Multi-agent AI conversation system
* Runtime personality retrieval using Kuzu Graph DB
* AI-generated responses using Groq + Llama 3
* Personality-conditioned conversations
* Modern minimal frontend UI
* Scalable architecture for dynamic agent insertion

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** Kuzu Graph Database
* **LLM/API:** Groq API (Llama 3)
* **Frontend:** Vanilla HTML, CSS, JavaScript

## 🧠 Architecture

```text
Frontend UI
   ↓
Express Backend
   ↓
Conversation Engine
   ↓
Kuzu Graph DB
   ↓
Runtime Personality Retrieval
   ↓
Groq LLM API
   ↓
AI-generated Responses
```

## ⚡ How It Works

1. Personality documents are stored in Kuzu Graph DB
2. Backend retrieves personalities at runtime
3. AI agents generate contextual responses using Groq LLM
4. Frontend renders the group conversation dynamically

## 📂 Project Structure

```text
├── personalities/
├── public/
├── conversation.js
├── groq.js
├── kuzuSetup.js
├── insertPersonalities.js
├── server.js
```

## ▶️ Run Locally

```bash
npm install
node kuzuSetup.js
node insertPersonalities.js
node server.js
```

Open:

```text
http://localhost:3000
```

## 🔥 Future Improvements

* Dynamic agent insertion (`POST /add-agent`)
* Persistent memory and relationships
* Streaming AI responses
* Enhanced agent reasoning
* Advanced RAG pipeline

## 🎯 Summary

Built a scalable multi-agent AI simulation system with runtime graph-based memory retrieval and LLM-powered personality-conditioned conversations.
