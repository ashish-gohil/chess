import { randomUUID } from "crypto";
import { WebSocket } from "ws";
import { Chess } from "chess.js";
import {
  BLACK_USER,
  CHECK,
  CHECKMATE,
  GAME_ADDED,
  GAME_ALERT,
  GAME_ERROR,
  GAME_JOINED,
  GAME_NOT_FOUND,
  GAME_OVER,
  INIT_GAME,
  INVALID_MOVE,
  MOVE,
  MOVE_SUCCESS,
  STALEMATE,
  WHITE_USER,
} from "./message";

// interface UserInterface {
//   socket: WebSocket;
//   id?: string;
// }
interface Game {
  id: string;
  whiteUser: User | null;
  blackUser: User | null;
  board: Chess;
}

export class User {
  // this shows howmany users are currently online
  public id: string | null;
  public socket: WebSocket;
  public isGuest: boolean;
  // public gameId: string | null;
  constructor(
    socket: WebSocket,
    // gameId: string | null = null
    isGuest: boolean = false
  ) {
    this.id = randomUUID();
    this.socket = socket;
    this.isGuest = isGuest;
    // this.gameId = gameId;
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
    console.log(this.users.length);
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
      console.log("games");
      console.log(this.games);
      const message = JSON.parse(data.toString());
      if (message.type === INIT_GAME) {
        if (!this.pendingGameId) {
          this.addNewGame(user);
          user.socket.send(
            JSON.stringify({
              type: GAME_ADDED,
              payload: {
                message: "New Game is Added, waiting for opponent!",
                gameId: this.pendingGameId,
                userType: WHITE_USER,
              },
            })
          );
        } else {
          const pendingGame = this.games.find(
            (game) => game.id === this.pendingGameId
          );
          if (!pendingGame) {
            user.socket.send(JSON.stringify({ type: GAME_NOT_FOUND }));
            return;
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
            return;
          } else {
            this.games = this.games.map((game) =>
              game.id === this.pendingGameId
                ? { ...game, blackUser: user }
                : game
            );
            pendingGame?.whiteUser?.socket.send(
              JSON.stringify({
                type: GAME_JOINED,
                payload: {
                  message: "Game is joined",
                  gameId: pendingGame?.id,
                  userType: WHITE_USER,
                },
              })
            );
            user.socket.send(
              JSON.stringify({
                type: GAME_JOINED,
                payload: {
                  message: "Game is joined",
                  gameId: pendingGame?.id,
                  userType: BLACK_USER,
                },
              })
            );
            this.pendingGameId = null;
            return;
          }
        }
      }
      if (message.type === MOVE) {
        const curGame = this.games.find(
          (game) => game.blackUser === user || game.whiteUser === user
        );
        // console.log(curGame);
        if (!curGame) {
          user.socket.send(
            JSON.stringify({
              type: GAME_NOT_FOUND,
              payload: { message: "User is not playing any game?" },
            })
          );
          return;
        }

        if (
          (curGame.blackUser === user && curGame.board.turn() === "b") ||
          (curGame.whiteUser === user && curGame.board.turn() === "w")
        ) {
          try {
            const move = curGame?.board.move({
              from: message.from,
              to: message.to,
            });

            console.log(curGame?.board.fen());
            if (move === null) {
              console.log("Invalid move");
            } else {
              console.log("Move made:", move);

              if (curGame?.board?.isCheckmate()) {
                console.log("Checkmate! Game over.");
                user.socket.send(
                  JSON.stringify({
                    type: CHECKMATE,
                    payload: {
                      message: "Opponent is checkmate, you win!",
                      fen: curGame?.board?.fen(),
                    },
                  })
                );
                curGame.blackUser === user
                  ? curGame.whiteUser?.socket.send(
                      JSON.stringify({
                        type: CHECKMATE,
                        payload: {
                          message: "You are checkmate, Opponent win!",
                          fen: curGame?.board?.fen(),
                        },
                      })
                    )
                  : curGame.blackUser?.socket.send(
                      JSON.stringify({
                        type: CHECKMATE,
                        payload: {
                          message: "You are checkmate, Opponent win!",
                          fen: curGame?.board?.fen(),
                        },
                      })
                    );
              } else if (curGame?.board?.isCheck()) {
                console.log("Check! The opponent is in check.");
                user.socket.send(
                  JSON.stringify({
                    type: CHECK,
                    payload: {
                      message: "The opponent is in check.",
                      fen: curGame?.board?.fen(),
                    },
                  })
                );
                curGame.blackUser === user
                  ? curGame.whiteUser?.socket.send(
                      JSON.stringify({
                        type: CHECK,
                        payload: {
                          message: "You are on Check!",
                          fen: curGame?.board?.fen(),
                        },
                      })
                    )
                  : curGame.blackUser?.socket.send(
                      JSON.stringify({
                        type: CHECK,
                        payload: {
                          message: "You are on Check!",
                          fen: curGame?.board?.fen(),
                        },
                      })
                    );
              } else if (curGame?.board?.isStalemate()) {
                console.log("Stalemate. Draw!");
                user.socket.send(
                  JSON.stringify({
                    type: STALEMATE,
                    payload: {
                      message: "Stalemate. Draw!",
                      fen: curGame?.board?.fen(),
                    },
                  })
                );
                curGame.blackUser === user
                  ? curGame.whiteUser?.socket.send(
                      JSON.stringify({
                        type: STALEMATE,
                        payload: {
                          message: "Stalemate. Draw!",
                          fen: curGame?.board?.fen(),
                        },
                      })
                    )
                  : curGame.blackUser?.socket.send(
                      JSON.stringify({
                        type: STALEMATE,
                        payload: {
                          message: "Stalemate. Draw!",
                          fen: curGame?.board?.fen(),
                        },
                      })
                    );
              } else if (curGame?.board?.isGameOver()) {
                console.log("Game over (not checkmate or stalemate).");
                user.socket.send(
                  JSON.stringify({
                    type: GAME_OVER,
                    payload: {
                      message: "Game over, You Wins!",
                      fen: curGame?.board?.fen(),
                    },
                  })
                );
                curGame.blackUser === user
                  ? curGame.whiteUser?.socket.send(
                      JSON.stringify({
                        type: GAME_OVER,
                        payload: {
                          message: "Game over, You Loose!",
                          fen: curGame?.board?.fen(),
                        },
                      })
                    )
                  : curGame.blackUser?.socket.send(
                      JSON.stringify({
                        type: GAME_OVER,
                        payload: {
                          message: "Game over, You Loose!",
                          fen: curGame?.board?.fen(),
                        },
                      })
                    );
              } else {
                console.log("Game continues.");
                user.socket.send(
                  JSON.stringify({
                    type: MOVE_SUCCESS,
                    payload: {
                      message: "Move Success, Opponents Turn!",
                      fen: curGame?.board?.fen(),
                    },
                  })
                );
                curGame.blackUser === user
                  ? curGame.whiteUser?.socket.send(
                      JSON.stringify({
                        type: MOVE_SUCCESS,
                        payload: {
                          message: "Move Success, Your Turn!",
                          fen: curGame?.board?.fen(),
                        },
                      })
                    )
                  : curGame.blackUser?.socket.send(
                      JSON.stringify({
                        type: MOVE_SUCCESS,
                        payload: {
                          message: "Move Success, Your Turn!",
                          fen: curGame?.board?.fen(),
                        },
                      })
                    );
              }
            }
            return;
          } catch (err: any) {
            user.socket.send(
              JSON.stringify({
                type: INVALID_MOVE,
                payload: {
                  message: "Move is Invalid, try again!",
                  error: err.toString(),
                },
              })
            );
            return;
          }
        } else {
          user.socket.send(
            JSON.stringify({
              type: INVALID_MOVE,
              payload: { message: "It is not your turn!" },
            })
          );
        }
      }
    });
  }

  addNewGame(user: User) {
    const newGame: Game = {
      id: randomUUID(),
      whiteUser: user,
      blackUser: null,
      board: new Chess(),
    };
    this.games.push(newGame);
    this.pendingGameId = newGame.id;
  }
}

// export const gameInstance = GameManager.getInstance();
