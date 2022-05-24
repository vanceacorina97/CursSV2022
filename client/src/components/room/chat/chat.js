import { useEffect, useState } from "react";

const Chat = ({ socket, roomName }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const addMessage = (message) => {
    setMessages((messages) => {
      return [...messages, message];
    });
  };

  useEffect(() => {
    socket.on("received-message", (message) => {
      addMessage(message);
    });
  }, []);

  const sendMessage = () => {
    socket.emit("new-message", { message, roomName });
    setMessage("");
  };

  const handleMessageInputChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <div className="chat-box">
        {messages.map((message, index) => (
          <p style={{ padding: 5 }} key={`message-${index}`}>
            {message}
          </p>
        ))}
      </div>
      <input
        value={message}
        placeholder="Enter a message"
        type="text"
        onChange={handleMessageInputChange}
      ></input>
      <button onClick={sendMessage}>Send message!</button>
    </>
  );
};

export default Chat;
