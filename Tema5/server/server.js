const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const port = 3000;
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

const answers = [];
const hexValues = [];

const generateRandHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const emitStatisticsData = () => {
  io.to("statistics").emit("data", {
    answers: answers.reduce((acc, curr) => {
      return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
    }, {}),
    hexColors: hexValues,
  });
};

io.on("connection", (socket) => {
  socket.data.name = socket.id;
  socket.emit("connected");
  socket.join("statistics");

  emitStatisticsData();

  socket.on("new-data", (message) => {
    answers.push(message.inputAnswer);
    if (!hexValues.some((el) => el.value === message.inputAnswer)) {
      hexValues.push({
        value: message.inputAnswer,
        hexValue: generateRandHexColor(),
      });
    }
    emitStatisticsData();
  });
});
