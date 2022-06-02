/*
(0,0)----------------------(0,3)----------------------(0,6)
  |                          |                          |
  |      (1,1)-------------(1,3)-------------(1,5)      |
  |        |                 |                 |        |
  |        |      (2,2)----(2,3)----(2,4)      |        |
  |        |        |                 |        |        |
(3,0)----(3,1)----(3,2)             (3,4)----(3,5)----(3,6)
  |        |        |                 |        |        |
  |        |      (4,2)----(4,3)----(4,4)      |        |
  |        |                 |                 |        |
  |      (5,1)-------------(5,3)-------------(5,5)      |
  |                          |                          |
(6,0)----------------------(6,3)----------------------(6,6)

Nodes are represented as having relative positions (r, c) one to another.
To check if a node is in a mill, we check for nodes in the adjacency list which have the same row or column.
*/
import letters from "./letters.js";

class Board {
  constructor(size = 3) {
    this.nodeList = new Map();
    this.nodePositions = new Map();
    this.firstTokens = 9;
    this.secondTokens = 9;
    this.initBoard(size);
  };

  initNode(letter, neighbours, pos) {
    this.nodeList.set(letter, { value: 0, neighbours }); // Create a node with its neighbours
    this.nodePositions.set(letter, pos); // Save the relative position of the node
  };

  initBoard(squares) {
    let currentNode1 = letters.gen().next().value,
      currentNode2 = currentNode1;
    let prevNode1, nextNode1, prevNode2, nextNode2, posX, posY; // Store the previous node letter and the next node letter

    for (let i = 0; i < squares; i++) {
      // Go through each square individually and link the nodes in that square
      posX = i;
      posY = i;
      for (let node = 0; node < 4; node++) {
        // Each square has 8 nodes
        nextNode1 = letters.gen().next().value;
        nextNode2 = letters.gen().next().value; // Get next node at the start of the iteration

        if (posX === posY) {
          // Upper corner node
          this.initNode(currentNode1, [nextNode1, nextNode2], [posX, posX]);
          posY = posY + squares - i;
        } else if (posY === squares * 2 - i) {
          // Nodes in the lower part of the secondary diagonal
          this.initNode(currentNode1, [prevNode1, nextNode1], [posX, posY]);
          this.initNode(currentNode2, [prevNode2, nextNode2], [posY, posX]);

          posX = posX + squares - i;
        } else {
          // Nodes in the upper part of the secondary diagonal
          this.initNode(currentNode1, [prevNode1, nextNode1], [posX, posY]);
          this.initNode(currentNode2, [prevNode2, nextNode2], [posY, posX]);

          posY = posY + squares - i;
        };

        prevNode1 = currentNode1;
        currentNode1 = nextNode1; // prevNode becomes the current one, and currentNode becomes the nextNode
        prevNode2 = currentNode2;
        currentNode2 = nextNode2;
      };
      this.initNode(currentNode1, [prevNode1, prevNode2], [posX, posX]); // Making the last node in the square
      this.nodeList.get(prevNode2).neighbours[1] = currentNode1; // Need to manually take the node before the last one to have the last one as a neighbour
      currentNode1 = currentNode2; // currentNode1 must be currentNode2 since that is the next letter, and the next node is a corner (so we don't need different values for them)
    };

    const crossArm = [[], [], [], []]; // Each 'arm' represents a quarter of the cross that forms the board
    this.nodePositions.forEach((pos, node) => {
      if (pos[1] === squares) {
        // Vertical part of the cross
        if (pos[0] < squares) {
          // Upper part of the vertical part
          crossArm[0].push(node);
        } else {
          // Lower part of the vertical part
          crossArm[1].push(node);
        };
      } else if (pos[0] === squares) {
        // Horizontal part of the cross
        if (pos[1] < squares) {
          // Left part of the horizontal part
          crossArm[2].push(node);
        } else {
          // Right part of the horizontal part
          crossArm[3].push(node);
        };
      };
    });

    // Nodes which are in the outermost part of the board, eg: b,c,g,f
    console.log(crossArm[1][0]);
    this.nodeList.get(crossArm[0][0]).neighbours.push(crossArm[0][1]); // Upper part of vertical part
    this.nodeList.get(crossArm[1][0]).neighbours.push(crossArm[1][1]); // Lower part of vertical part
    this.nodeList.get(crossArm[2][0]).neighbours.push(crossArm[2][1]); // Left part of horizontal part
    this.nodeList.get(crossArm[3][0]).neighbours.push(crossArm[3][1]); // Right part of horizontal part

    for (let i = 1; i < squares - 1; i++) {
      // Nodes which have 4 neighbours (intersections), eg: j,k,n,o
      this.nodeList
        .get(crossArm[0][i])
        .neighbours.push(crossArm[0][i - 1], crossArm[0][i + 1]); // Upper part of vertical part
      this.nodeList
        .get(crossArm[1][i])
        .neighbours.push(crossArm[1][i - 1], crossArm[1][i + 1]); // Lower part of vertical part
      this.nodeList
        .get(crossArm[2][i])
        .neighbours.push(crossArm[2][i - 1], crossArm[2][i + 1]); // Left part of horizontal part
      this.nodeList
        .get(crossArm[3][i])
        .neighbours.push(crossArm[3][i - 1], crossArm[3][i + 1]); // Right part of horizontal part
    };

    // Nodes which are in the innermost part of the board, eg: r,s,w,v
    this.nodeList
      .get(crossArm[0][squares - 1])
      .neighbours.push(crossArm[0][squares - 2]); // Upper part of vertical part
    this.nodeList
      .get(crossArm[1][squares - 1])
      .neighbours.push(crossArm[1][squares - 2]); // Lower part of vertical part
    this.nodeList
      .get(crossArm[2][squares - 1])
      .neighbours.push(crossArm[2][squares - 2]); // Left part of horizontal part
    this.nodeList
      .get(crossArm[3][squares - 1])
      .neighbours.push(crossArm[3][squares - 2]); // Right part of horizontal part

    // Reset the letter counter
    letters.reset();
  };

  addToken(node, player) {
    if (this.nodeList.get(node).value !== 0) {
      throw new Error("The position is already occupied!");
    };
    return (this.nodeList.get(node).value = player);
  };

  removeToken(node, player, isFirstPlayer) {
    if (this.nodeList.get(node).value === 0) {
      throw new Error("The position is already empty!");
    } else if (this.nodeList.get(node).value === player) {
      throw new Error("Player cannot remove its own token");
    } else if (this.checkMill(node).length !== 0) {
      throw new Error("Can't remove a token that is part of a mill!");
    };
    if (isFirstPlayer) {
      this.secondTokens--;
    } else {
      this.firstTokens--;
    };

    return !(this.nodeList.get(node).value = 0);
  };

  gameOver() {
    if (this.firstTokens < 3) {
      return 2;
    };
    if (this.secondTokens < 3) {
      return 1;
    };
    return false;
  };

  moveToken(start, end, player) {
    if (this.nodeList.get(end).value !== 0) {
      throw new Error("Can't move token to an occupied position!");
    };
    if (this.nodeList.get(start).value === 0) {
      throw new Error("There is no token to be moved!");
    };
    if (this.nodeList.get(start).value !== player) {
      throw new Error("Can't move other player's token!");
    };
    // This rule does not apply since it's not a real game rule
    // if (this.checkMill(start).length !== 0) {
    //   throw new Error("Can't move a token that is part of a mill!");
    // }
    if (this.nodeList.get(start).neighbours.indexOf(end) === -1) {
      throw new Error("Can't move token more that one position away!");
    };

    this.nodeList.get(start).value = 0;
    this.nodeList.get(end).value = player;
  };

  checkMill(node) {
    // Checks if node is part of a mill, returns one or two arrays containing the nodes which make the mill
    const vMill = [node],
      hMill = [node],
      value = this.nodeList.get(node).value;
    if (!value) {
      throw new Error("An empty node can't be part of a mill!");
    }
    const currentNeighbours = this.nodeList.get(node).neighbours;
    if (currentNeighbours.length === 4) {
      // Means we are in a + formation, we have 4 neighbours
      for (let n = 0; n < 4; n++) {
        if (this.nodeList.get(currentNeighbours[n]).value === value) {
          // Check if the neighbours value is the same as the node in the parameter
          if (
            this.nodePositions.get(currentNeighbours[n])[0] ===
            this.nodePositions.get(node)[0]
          ) {
            // Means we are on the same line, horizontally
            hMill.push(currentNeighbours[n]);
          } else {
            vMill.push(currentNeighbours[n]);
          }
        }
      }
    } else if (currentNeighbours.length === 3) {
      // Means we are in a T formation, we have 3 neighbours, first 2 of them have the same row/column as the current node
      // Check the first two neighbours which are on the same row/column as the current node, then compare the remaining node with his next neighbour inline/incolumn
      if (
        this.nodePositions.get(currentNeighbours[0])[0] ===
        this.nodePositions.get(currentNeighbours[1])[0]
      ) {
        // Check if first two neighbours are on the same row
        if (this.nodeList.get(currentNeighbours[0]).value === value) {
          hMill.push(currentNeighbours[0]);
        }
        if (this.nodeList.get(currentNeighbours[1]).value === value) {
          hMill.push(currentNeighbours[1]);
        }
        if (this.nodeList.get(currentNeighbours[2]).value === value) {
          // Check if the neighbour on the same column as current node has same value
          vMill.push(currentNeighbours[2]);
          // find the neighbour's neighbours
          this.nodeList
            .get(currentNeighbours[2])
            .neighbours.forEach((neighbour) => {
              // Check if the next node in the column has the same value
              if (
                this.nodePositions.get(neighbour)[1] ===
                this.nodePositions.get(currentNeighbours[2])[1] &&
                this.nodeList.get(neighbour).value === value &&
                neighbour !== node
              ) {
                vMill.push(neighbour);
              }
            });
        }
      } else if (
        this.nodePositions.get(currentNeighbours[0])[1] ===
        this.nodePositions.get(currentNeighbours[1])[1]
      ) {
        // Check if first two neighbours are on the same column
        if (this.nodeList.get(currentNeighbours[0]).value === value) {
          vMill.push(currentNeighbours[0]);
        }
        if (this.nodeList.get(currentNeighbours[1]).value === value) {
          vMill.push(currentNeighbours[1]);
        }
        if (this.nodeList.get(currentNeighbours[2]).value === value) {
          // Check if the neighbour on the same row as current node has same value
          hMill.push(currentNeighbours[2]);
          // find the neighbour's neighbours
          this.nodeList
            .get(currentNeighbours[2])
            .neighbours.forEach((neighbour) => {
              // Check if the next node in the row has the same value
              if (
                this.nodePositions.get(neighbour)[0] ===
                this.nodePositions.get(currentNeighbours[2])[0] &&
                this.nodeList.get(neighbour).value === value &&
                neighbour !== node
              ) {
                hMill.push(neighbour);
              }
            });
        }
      }
    } else if (currentNeighbours.length === 2) {
      // Means we are in an L formation, we have 2 neighbours each with a different orientation

      if (
        this.nodePositions.get(currentNeighbours[0])[0] ===
        this.nodePositions.get(node)[0]
      ) {
        // If first neighbour (currentNeighbours[0]) is on the same row

        if (this.nodeList.get(currentNeighbours[0]).value === value) {
          hMill.push(currentNeighbours[0]);
          this.nodeList
            .get(currentNeighbours[0])
            .neighbours.forEach((neighbour) => {
              // Check the neighbour neighbours on the same row
              if (
                this.nodePositions.get(neighbour)[0] ===
                this.nodePositions.get(currentNeighbours[0])[0] &&
                neighbour !== node &&
                this.nodeList.get(neighbour).value === value
              ) {
                hMill.push(neighbour);
              };
            });
        };

        if (this.nodeList.get(currentNeighbours[1]).value === value) {
          vMill.push(currentNeighbours[1]);
          this.nodeList
            .get(currentNeighbours[1])
            .neighbours.forEach((neighbour) => {
              // Check the neighbour neighbours on the same column
              if (
                this.nodePositions.get(neighbour)[1] ===
                this.nodePositions.get(currentNeighbours[1])[1] &&
                neighbour !== node &&
                this.nodeList.get(neighbour).value === value
              ) {
                vMill.push(neighbour);
              };
            });
        };

      } else {
        // The first neighbour (currentNeighbours[0]) is on the same column

        if (this.nodeList.get(currentNeighbours[0]).value === value) {
          vMill.push(currentNeighbours[0]);
          this.nodeList
            .get(currentNeighbours[0])
            .neighbours.forEach((neighbour) => {
              // Check the neighbour neighbours on the same column
              if (
                this.nodePositions.get(neighbour)[1] ===
                this.nodePositions.get(currentNeighbours[0])[1] &&
                neighbour !== node &&
                this.nodeList.get(neighbour).value === value
              ) {
                vMill.push(neighbour);
              };
            });
        };

        if (this.nodeList.get(currentNeighbours[1]).value === value) {
          hMill.push(currentNeighbours[1]);
          this.nodeList
            .get(currentNeighbours[1])
            .neighbours.forEach((neighbour) => {
              // Check the neighbour neighbours on the same row
              if (
                this.nodePositions.get(neighbour)[0] ===
                this.nodePositions.get(currentNeighbours[1])[0] &&
                neighbour !== node &&
                this.nodeList.get(neighbour).value === value
              ) {
                hMill.push(neighbour);
              };
            });
        };
      };
    };
    const result = [];
    if (hMill.length === 3) result.push(hMill);
    if (vMill.length === 3) result.push(vMill);
    return result;
  };
};

export default Board;
