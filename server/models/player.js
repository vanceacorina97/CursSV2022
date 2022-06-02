class Player {
  constructor(id, action, board, isFirst) {
    this.id = id;
    this.action = action;
    this.nodesLeftToPlace = 9;
    this.error = '';
    this.board = board;
    this.isFirst = isFirst;
    this.selectedNode = null;
  }

  changeAction(newAction) {
    this.action = newAction;
  }

  capturedNodes = () => this.isFirst ? 9 - this.board.secondTokens : 9 - this.board.firstTokens;

  toJson() {
    const json = {};
    json[this.id] = {
      action: this.action,
      nodesToPlace: this.nodesLeftToPlace,
      error: this.error,
      capturedNodes: this.capturedNodes(),
      isFirst: this.isFirst
    };

    return json;
  }

  is = id => this.id === id;

  placedNode() {
    this.nodesLeftToPlace--;
  }

  setError(newError) {
    this.error = newError;
  }
}

export default Player;