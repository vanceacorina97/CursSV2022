import Game from "./game";
import Waiting from "./waiting";
import Leave from "./leave";

const Room = (props) => {
  const content = () => {
    if (props.mustLeave) {
      return (
        <Leave
          socket={props.socket}
          message={`${props.message}${
            props.winner
              ? props.winner === props.socket.id
                ? "You won! :)"
                : "You lost... :/"
              : ""
          }`}
        />
      );
    }
    if (!props.ready) return <Waiting />;

    return (
      <Game socket={props.socket} players={props.players} nodes={props.nodes} />
    );
  };

  return (
    <div className="room">
      <h1>Room {props.name}</h1>
      {content()}
    </div>
  );
};

export default Room;
