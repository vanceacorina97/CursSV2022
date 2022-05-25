const RoomRow = (props) => {
  const joinRoom = () => {
    props.socket.emit("join-room", props.name);
  };

  return (
    <>
      <div className="border mt20 d-flex p10 mill-row">
        {props.name}
        <button onClick={joinRoom}>Join</button>
      </div>
    </>
  );
};

export default RoomRow;
