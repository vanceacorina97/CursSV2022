import Game from "./game";
import Waiting from "./waiting";

const Room = (props) => {
  const content = () => {
    if (!props.ready) return <Waiting />;

    return <Game socket={props.socket} />;
  };

  return (
    <div className="room">
      <h1>Room {props.name}</h1>
      {content()}
    </div>
  );
};

export default Room;
