class Game {
  constructor(name) {
    this.name = name;
    this.ready = false;
  }

  data() {
    return {
      name: this.name,
      ready: this.ready,
    };
  }

  addPlayer() {
    // ...
    this.ready = true;
  }
}

module.exports = Game;
