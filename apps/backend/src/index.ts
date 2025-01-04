import { WebSocketServer } from "ws";
import { GameManager } from "./gameManager";

const wss = new WebSocketServer({ port: 8080 });
const gameInstance = GameManager.getInstance();
wss.on("connection", function connection(ws) {
  ws.on("error", console.error);
  gameInstance.addUser(ws);

  ws.on("close", () => {
    gameInstance.removeUser(ws);
  });
});
