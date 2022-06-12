import ChatBox from "./chatbox";
import MessageForm from "./message_form";
// import Notification from "../notification";

const Chat = ({ socket, players }) => {
  const name = () => {
  if (socket.id === Object.keys(players)[0]) {
    return 'You'
  }
  if (socket.id === Object.keys(players)[1]) {
    return 'Opponent'
  }
}
  return (
    <div className="chat-container">
      {/* <Notification socket={socket} /> */}
      <ChatBox socket={socket} />
      <MessageForm socket={socket} namePlayer={name()}/>
    </div>
  );
};

export default Chat;
