import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server);

server.listen(3000, () => {
  console.log(`Server started on port ${3000}`);
});

const COLORS = [
  ["#FAC3E3", "#E0B5FA", "#ACAFFA"],
  ["#FAD5CB", "#FFF2D0", "#B8EBA9"],
  ["#FF9180", "#FFCB87", "#FFFED9"]
];

const serverMatrix = [["", "", ""], ["", "", ""], ["", "", ""]];
const serverColorPalette = [
  ["#ffff87", "#ffff87", "#ffff87"],
  ["#ffff87", "#ffff87", "#ffff87"],
  ["#ffff87", "#ffff87", "#ffff87"]
];

io.on("connection", (socket) => {
  console.log(`[SOCKET CONNECTED] ${socket.id}`);
  socket.emit("data", { serverMatrix, serverColorPalette });

  socket.on("feedback", ({ value, selected }) => {
    serverMatrix[selected[0]][selected[1]] = value;
    serverColorPalette[selected[0]][selected[1]] = COLORS[Math.floor(Math.random() * COLORS.length)][Math.floor(Math.random() * COLORS.length)];
    io.emit("data", { serverMatrix, serverColorPalette });
  });

  socket.on("disconnect", () => {
    console.log(`[SOCKET DISCONNECTED] ${socket.id}`);
    socket.removeAllListeners(); // Optional
  });
});

