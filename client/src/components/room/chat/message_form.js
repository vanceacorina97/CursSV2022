import { useState } from "react";

const MessageForm = ({ socket, namePlayer }) => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
     // socket.emit("new-message", { name, message, roomName });
    socket.emit("new-message", { namePlayer, message});
    setMessage("");
  };

  const handleMessageInputChange = (e) => {
    setMessage(e.target.value);
  };

  // const handleNameInputChange = (e) => {
  //   setName(e.target.value);
  // };

  return (
    <div className="message-input">
      {/* <input
        value={name}
        placeholder="Enter your name"
        type="text"
        onChange={handleNameInputChange}
      ></input> */}
      <input
        className="chat-input-field"
        value={message}
        placeholder="Enter a message"
        type="text"
        onChange={handleMessageInputChange}
      ></input>
      <button onClick={sendMessage}>💬</button>
    </div>
  );
};

export default MessageForm;
