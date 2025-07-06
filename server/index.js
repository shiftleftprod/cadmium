const WebSocket = require("ws");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const wss = new WebSocket.Server({ server });

// État du jeu (à toi de définir la structure)
let gameState = {
  // Ton état ici
};

// Clients connectés
const clients = {
  displays: new Set(),
  remotes: new Set(),
};

function sendToDisplays(message) {
  console.log(clients.displays);
  clients.displays.forEach((ws) => {
    ws.send(JSON.stringify(message));
  });
}

function sendToRemotes(message) {
  clients.remotes.forEach((ws) => {
    ws.send(JSON.stringify(message));
  });
}

wss.on("connection", (ws) => {
  console.log("Connexion WebSocket en cours...");

  ws.on("message", (data) => {
    const message = JSON.parse(data.toString());
    console.log("Message reçu:", message);

    // Ici tu gères les différents types de messages
    console.log(message.type === "PING");
    switch (message.type) {
      case "REGISTER":
        console.log(message.clientType + " connected");
        if (message.clientType === "display") {
          clients.displays.add(ws);
        } else if (message.clientType === "remote") {
          clients.remotes.add(ws);
        }
        break;
      case "PING":
        sendToDisplays({
          type: "PING",
          data: "Ping !",
        });

      default:
        console.log("Message non géré:", message);
    }
  });

  ws.on("close", () => {
    clients.displays.delete(ws);
    clients.remotes.delete(ws);
    console.log("Client déconnecté");
  });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
