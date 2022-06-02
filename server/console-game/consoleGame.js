import { io } from "socket.io-client";
import readline from "readline";
import displayBoard from "./displayBoard.js";

const cli = readline.createInterface(process.stdin, process.stdout);
const socket = io("http://localhost:3000/");
let socketId;

socket.on("connected", id => {
  socketId = id;
});

socket.on("create-room-error", () => {
  console.log("Room name is already taken!");
  process.stdout.write(`${socketId}> Enter an action: `);
});

socket.on("data", data => {
  if (data.room.players && Object.keys(data.room.players).length === 2) { // Check if we can start the game
    console.log("Players in room: ", data.room.players, '\n');
    if (data.room.players[socketId].action === "place") {
      cli.question(`${socketId}> Where do you want to place the piece? `, answer => {
        socket.emit("game-action", {
          action: "place",
          circleId: answer
        });
      });
    } else {
      console.log("Waiting for your adversary...");
    }
  } else { // else show available rooms
    data.hasOwnProperty('availableRooms') && console.log(data);
    process.stdout.write(`${socketId}> Enter an action: `);
  }
  // process.stdout.write(`${socketId}> Enter an action: `);
});

socket.on("game-data", data => {
  if (data.game.players[socketId].error) {
    console.log(data.game.players[socketId].error);
  } else {
    displayBoard(data.game.nodes, socketId, data.game.players[socketId].isFirst);
  }
  switch (data.game.players[socketId].action) {
    case "place": {
      cli.question(`${socketId}> Where do you want to place the piece? `, answer => {
        socket.emit("game-action", {
          action: "place",
          circleId: answer
        });
      });
      break;
    }

    case "capture": {
      cli.question(`${socketId}> Which piece do you want to capture? `, answer => {
        socket.emit("game-action", {
          action: "capture",
          circleId: answer
        });
      });
      break;
    }

    case "select": {
      cli.question(`${socketId}> Which piece do you want to select? `, answer => {
        socket.emit("game-action", {
          action: "select",
          circleId: answer
        });

      });
      break;
    }

    case "move": {
      cli.question(`${socketId}> Which piece do you want to move? `, answer => {
        socket.emit("game-action", {
          action: "move",
          circleId: answer
        });
      });

      break;
    }

    case "wait": {
      console.log("Waiting for your adversary...");
    }
  }
});

cli.on('line', line => {
  switch (line.trim()) {

    case "create": {
      cli.question(`${socketId}> How should the room be named? `, answer => {
        socket.emit("create-room", answer);
      });
      break;
    }

    case "join": {
      cli.question(`${socketId}> What room do you want to join? `, answer => {
        socket.emit("join-room", answer);
      });
      break;
    }

    default: {
      console.log("No such action exists!");
      console.log((`${socketId}> Enter an action: `));
    }
  }

});
