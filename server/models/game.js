import Board from "./board.js";
import Player from "./player.js";

const ACTIONS = {
  wait: "wait",
  place: "place",
  move: "move",
  capture: "capture",
  select: "select",
};

class Game {
  constructor(name, player) {
    this.name = name;
    this.ready = false;
    this.board = new Board();
    this.playerOne = new Player(player, ACTIONS.place, this.board, true);
    this.actions = new Map([
      ["place", this.place.bind(this)],
      ["capture", this.capture.bind(this)],
      ["select", this.select.bind(this)],
      ["move", this.move.bind(this)],
    ]);
  }

  data = () => {
    if (this.isOver)
      return {
        mustLeave: true,
        message: "The game is over!",
        winner: this.winner,
      };

    if (this.playerTwo) {
      return {
        players: { ...this.playerOne.toJson(), ...this.playerTwo.toJson() },
        nodes: Object.fromEntries(this.board.nodeList),
        ready: this.ready,
        name: this.name,
      };
    }

    return {
      players: { ...this.playerOne.toJson() },
      nodes: Object.fromEntries(this.board.nodeList),
      ready: this.ready,
      name: this.name,
    };
  };

  addPlayer(player) {
    this.playerTwo = new Player(player, ACTIONS.wait, this.board, false);
    this.ready = true;
  }

  place(node, currentPlayer, otherPlayer) {
    this.board.addToken(node, currentPlayer.id);
    currentPlayer.placedNode();
    this.afterPlaceOrMove(currentPlayer, otherPlayer, node);
  }

  afterPlaceOrMove(currentPlayer, otherPlayer, node) {
    if (this.board.checkMill(node).length) {
      currentPlayer.changeAction(ACTIONS.capture);
    } else {
      currentPlayer.changeAction(ACTIONS.wait);
      if (otherPlayer.nodesLeftToPlace) {
        otherPlayer.changeAction(ACTIONS.place);
      } else {
        otherPlayer.changeAction(ACTIONS.select);
      }
    }
  }

  capture(node, currentPlayer, otherPlayer) {
    this.board.removeToken(node, currentPlayer.id, currentPlayer.isFirst);
    currentPlayer.changeAction(ACTIONS.wait);
    if (otherPlayer.nodesLeftToPlace) {
      otherPlayer.changeAction(ACTIONS.place);
    } else {
      otherPlayer.changeAction(ACTIONS.select);
    }
  }

  select(node, currentPlayer) {
    currentPlayer.selectedNode = node;
    currentPlayer.changeAction(ACTIONS.move);
  }

  move(node, currentPlayer, otherPlayer) {
    this.board.moveToken(currentPlayer.selectedNode, node, currentPlayer.id);
    this.afterPlaceOrMove(currentPlayer, otherPlayer, node);
  }

  action(player, action, node) {
    let currentPlayer, otherPlayer;
    if (this.playerOne.is(player)) {
      currentPlayer = this.playerOne;
      otherPlayer = this.playerTwo;
    } else {
      currentPlayer = this.playerTwo;
      otherPlayer = this.playerOne;
    }
    try {
      if (this.actions.has(action)) {
        this.actions.get(action)(node, currentPlayer, otherPlayer);
      }
      currentPlayer.setError("");
      if (this.board.gameOver()) {
        this.isOver = true;
        this.winner =
          this.board.gameOver() == 1 ? this.playerOne.id : this.playerTwo.id;
      }
    } catch (e) {
      currentPlayer.setError(e.message);
      console.log(currentPlayer);
      if (action == "move") {
        currentPlayer.changeAction("select");
      }
    }
  }
}

export default Game;
