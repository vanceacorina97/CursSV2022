const RoomRow = (props) => {
  const joinRoom = () => {
    props.socket.emit("join-room", props.room);
  };

  return (
    <li key={props.room} onClick={joinRoom}>
      {props.room}
    </li>
  );
};

export default RoomRow;
