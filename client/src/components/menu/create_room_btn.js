import { useEffect, useState } from "react";

const CreateRoomBtn = ({ socket }) => {
  const [roomName, setRoomName] = useState("");
  const [error, setError] = useState();

  useEffect(() => {
    socket.on("create-room-error", () => {
      setError("Name is already used!");
    });
  });

  const handleRoomNameChange = (e) => {
    setRoomName(e.target.value);
    setError();
  };

  const createRoom = () => {
    if (roomName.length) {
      socket.emit("create-room", roomName);
    } else {
      setError("Room Name is required!");
    }
  };

  return (
    <>
      <div className="d-flex mt20">
        <div className="text-input-container">
          <input
            type="text"
            placeholder="Enter Room name"
            value={roomName}
            onChange={handleRoomNameChange}
            className="text-input"
          ></input>
        </div>
        <button onClick={createRoom}>Create</button>
      </div>
      {error ? <p className="error">{error}</p> : null}
    </>
  );
};

export default CreateRoomBtn;
