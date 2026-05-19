async function startSimulation() {

  const outputDiv = document.getElementById("output");

  outputDiv.innerHTML = `
    <div class="empty-state">
      Generating AI conversation...
    </div>
  `;

  try {

    const response = await fetch("/simulate", {
      method: "POST"
    });

    const data = await response.json();

    outputDiv.innerHTML = "";

    data.conversation.forEach(line => {

      // Split name and message
      const parts = line.split(":");

      const agentName = parts[0].trim();
      const message = parts.slice(1).join(":").trim();

      // lowercase class
      const agentClass = agentName.toLowerCase();

      // avatar initials
      const initials = agentName.charAt(0);

      // message element
      const messageDiv = document.createElement("div");

      messageDiv.classList.add("message");
      messageDiv.classList.add(agentClass);

      messageDiv.innerHTML = `
        <div class="avatar">
          ${initials}
        </div>

        <div class="message-content">

          <div class="agent-name">
            ${agentName}
          </div>

          <div class="agent-text">
            ${message}
          </div>

        </div>
      `;

      outputDiv.appendChild(messageDiv);
    });

  }

  catch (error) {

    console.error(error);

    outputDiv.innerHTML = `
      <div class="empty-state">
        Failed to generate conversation.
      </div>
    `;
  }
}