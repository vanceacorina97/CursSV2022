import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import QuestionForm from "./QuestionForm";
import Stats from "./Statistics/Stats";

function App() {
  const [connectedSocket, setConnectedSocket] = useState();
  const [statsData, setStatsData] = useState();

  useEffect(() => {
    const socket = io();

    socket.on("connected", () => {
      setConnectedSocket(socket);
    });

    socket.on("data", (receivedData) => {
      setStatsData(receivedData);
    });
  }, []);

  return (
    <div className="app-container">
      <QuestionForm
        question="Are you a developer?"
        socket={connectedSocket}
      ></QuestionForm>
      <Stats data={statsData}></Stats>
    </div>
  );
}

export default App;
