import { WebSocketServer } from "ws";
import express from "express";
import { createServer } from "http";

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

import gameData from "./gameData.js";

let gameState = {
  currentQuestion: {},
  revealedAnswers: [],
  maxQuestions: gameData.questions.length,
  teams: {},
};

// Clients connectés
const clients = {
  displays: new Set(),
  remotes: new Set(),
};

function sendToDisplays(message) {
  console.log("fhjkg");
  clients.displays.forEach((ws) => {
    ws.send(JSON.stringify(message));
  });
}

function sendToRemotes(message) {
  clients.remotes.forEach((ws) => {
    ws.send(JSON.stringify(message));
  });
}

function sendToAll(message) {
  sendToDisplays(message);
  sendToRemotes(message);
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
          data: {},
        });
        break;
      case "START_GAME":
        console.log("game started !");
        gameState.currentQuestion = gameData.questions[0];
        console.log(gameState.currentQuestion);
        sendToAll({
          type: "UPDATE_QUESTION",
          data: gameState.currentQuestion,
        });

        break;
      case "NEXT_QUESTION":
        console.log("NEXT QUESTION");
        gameState.currentQuestion =
          gameData.questions[
            gameData.questions.indexOf(gameState.currentQuestion) + 1
          ];
        console.log(gameState.currentQuestion);
        sendToAll({
          type: "UPDATE_QUESTION",
          data: gameState.currentQuestion,
        });
        break;
      case "REVEAL_ANSWER":
        sendToDisplays({
          type: "REVEAL_ANSWER",
          data: message.data,
        });
        console.log("REVEAL ANSWER");
        break;

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
