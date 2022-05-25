import Board from "./board";
import Chat from "./chat/chat";

const Game = (props) => {
  return (
    <div className="grid">
      <Board />
      <Chat socket={props.socket} />
    </div>
  );
};

export default Game;
