import { randomUUID } from "crypto";
import { WebSocket } from "ws";
import { GAME_ALERT, GAME_ERROR, GAME_NOT_FOUND, INIT_GAME } from "./message";

// interface UserInterface {
//   socket: WebSocket;
//   id?: string;
// }
interface Game {
  id: string;
  whiteUser: User | null;
  blackUser: User | null;
  moves: string[];
  currentBoard: string;
}

export class User {
  public id: string | null;
  public socket: WebSocket;
  constructor(socket: WebSocket) {
    this.id = randomUUID();
    this.socket = socket;
  }
}

export class GameManager {
  private games: Game[];
  private users: User[];
  private pendingGameId: string | null;
  private static instance: GameManager;

  constructor() {
    this.games = [];
    this.pendingGameId = null;
    this.users = [];
  }

  static getInstance() {
    if (!this.instance) {
      return new GameManager();
    }
    return this.instance;
  }
  addUser(socket: WebSocket) {
    const user = new User(socket);
    this.users.push(user);
    this.addHandler(user);
  }
  removeUser(socket: WebSocket) {
    if (this.users.find((user) => user.socket === socket)) {
      this.users = this.users.filter((user) => user.socket !== socket);
    }
    this.games.find((game) => game);
  }
  addHandler(user: User) {
    user.socket.on("message", (data) => {
      const message = JSON.parse(data.toString());
      if (message.type === INIT_GAME) {
        if (!this.pendingGameId) {
          this.addNewGame(user);
        } else {
          const pendingGame = this.games.find(
            (game) => game.id === this.pendingGameId
          );
          if (!pendingGame) {
            user.socket.send(JSON.stringify({ type: GAME_NOT_FOUND }));
          }
          if (pendingGame?.whiteUser === user) {
            user.socket.send(
              JSON.stringify({
                type: GAME_ALERT,
                payload: {
                  message: "Trying to Connect with yourself?",
                },
              })
            );
          }
        }
      }
    });
  }

  addNewGame(user: User) {
    const newGame: Game = {
      id: randomUUID(),
      whiteUser: user,
      blackUser: null,
      moves: [],
      currentBoard: "",
    };
    this.games.push(newGame);
    this.pendingGameId = newGame.id;
  }
}

// export const gameInstance = GameManager.getInstance();
