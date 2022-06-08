import Board from "./board";
import Chat from "./chat/chat";
import Player from "./player";

const Game = (props) => {
  const opponentPlayer = () => {
    const opponentKey = Object.keys(props.players).find(
      (key) => key !== props.socket.id
    );

    return props.players[opponentKey];
  };

  const currentPlayer = () => {
    return props.players[props.socket.id];
  };

  return (
    <div className="grid">
      <Board
        socket={props.socket}
        action={currentPlayer().action}
        nodes={props.nodes}
      />
      <div>
        <Player opponent={true} {...opponentPlayer()} />
        <Chat socket={props.socket} />
        <Player {...currentPlayer()} />
      </div>
    </div>
  );
};

export default Game;
