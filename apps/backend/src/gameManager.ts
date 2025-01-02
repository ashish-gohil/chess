interface Game {}

class GameManager {
  constructor() {}
  private games: Game[];
  private instance: GameManager;
  static getInstance() {
    if (!this.instance) {
      return new GameManager();
    }
    return this.instance;
  }
}
