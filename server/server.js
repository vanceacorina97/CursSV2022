import express from "express";
const app = express();
import http from "http";
import { Server } from "socket.io";
import Game from "./models/game.js";

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const port = 3000;
const server = http.createServer(app);
const io = new Server(server);

const __filename = fileURLToPath(import.meta.url);
app.use(express.static(dirname(__filename)));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

let availableRooms = [];
const games = {};

const emitMenuData = (socketName) => {
  io.to("menu").emit("data", {
    room: "menu",
    availableRooms,
  });
};

const emitRoomData = (roomName) => {
  io.to(roomName).emit("data", { room: games[roomName].data() });
};

io.on("connection", (socket) => {
  console.log(`[SOCKET CONNECTED] ${socket.id}`);

  socket.data.name = socket.id;

  socket.emit("connected", socket.id);
  socket.join("menu");

  emitMenuData();

  // Tema 4 - Ex 3
  // socket.on("new-message", ({ name, message, roomName }) => {
  //   socket.broadcast
  //     .to(roomName)
  //     .emit("notification", `${name} a trimis un mesaj!`);
  //   io.to(roomName).emit("received-message", `${name}: ${message}`);
  // });

  socket.on("new-message", (message) => {
    io.to(socket.data.room).emit("received-message", message);
  });

  socket.on("create-room", (roomName) => {
    if (availableRooms.indexOf(roomName) === -1 && roomName !== "menu") {
      console.log("[CREATED ROOM] " + roomName);
      availableRooms.push(roomName);
      games[roomName] = new Game(socket.id);
      socket.data.room = roomName;
      socket.leave("menu");
      socket.join(roomName);
      emitRoomData(roomName);
      emitMenuData();
    } else {
      socket.emit("create-room-error");
    }
  });

  socket.on("join-room", (roomName) => {
    socket.leave("menu");
    games[roomName].addPlayer(socket.id);
    socket.join(roomName);
    socket.data.room = roomName;
    availableRooms = availableRooms.filter((room) => room !== roomName);
    emitRoomData(roomName);
    emitMenuData();
  });

  socket.on("game-action", ({ action, circleId }) => {
    console.log({ action, circleId });
    const game = games[socket.data.room];
    game.action(socket.id, action, circleId);
    // Emit to everyone in 'roomName' the room data
    let data;
    if (game.isOver) {
      // leftRooms.push(socket.data.room);
      data = {
        name: socket.data.room,
        mustLeave: true,
        message: "The game ended.",
        winner: game.winner,
      };
    } else {
      data = {
        name: socket.data.room,
        ready: true,
        game: game.data(),
      };
    }
    io.to(socket.data.room).emit("game-data", data);
  });
});
