import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import Chat from "./components/room/chat/chat";
import Rooms from "./components/menu/rooms";

function App() {
  const [connectedSocket, setConnectedSocket] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const socket = io();

    socket.on("connected", () => {
      setConnectedSocket(socket);
    });

    socket.on("data", (receivedData) => {
      setData(receivedData);
    });
  }, []);

  if (!(data && connectedSocket)) {
    return <p>Waiting for connection...</p>;
  }

  console.log({ data });

  return (
    <div style={{ padding: 10 }}>
      <h1>Curs 4</h1>
      {data.room === "menu" ? (
        <Rooms socket={connectedSocket} rooms={data.availableRooms} />
      ) : (
        <Chat socket={connectedSocket} roomName={data.room} />
      )}
    </div>
  );
}

export default App;
