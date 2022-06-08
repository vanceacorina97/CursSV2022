const Leave = (props) => {
  const leaveRoom = () => {
    props.socket.emit("leave-room");
  };

  return (
    <div className="card p15">
      {props.message}
      <button className="mt20" onClick={leaveRoom}>
        Leave Room!
      </button>
    </div>
  );
};

export default Leave;
