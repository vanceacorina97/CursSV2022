import ChatBox from "./chatbox";
import MessageForm from "./message_form";
// import Notification from "../notification";

const Chat = ({ socket }) => {
  return (
    <div className="chat-container">
      {/* <Notification socket={socket} /> */}
      <ChatBox socket={socket} />
      <MessageForm socket={socket} />
    </div>
  );
};

export default Chat;
