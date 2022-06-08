import TokenPlayer1 from "../../metadata/token_player_1";
import TokenPlayer2 from "../../metadata/token_player_2";

const Node = (props) => {
  const gameAction = (e) => {
    // CSS Related
    if (props.action === "capture" && props.fill === "red") {
      e.target.classList.add("node-out");
    }

    // CSS Related
    if (props.action === "select" && props.fill !== "red") {
      e.target.classList.add("selected-node");
    }

    setTimeout(() => {
      props.socket.emit("game-action", {
        action: props.action,
        circleId: props.id, // node id
      });
    }, 100);

    // CSS Related
    setTimeout(() => {
      e.target.classList.remove("node-out");
    }, 200);
  };

  const classNames = () => {
    const classes = ["node"];
    if (props.isEmpty) {
      classes.push("empty");
    }

    return classes.join(" ");
  };

  if (props.isEmpty) {
    return (
      <circle
        key={props.id}
        id={props.id}
        cx={props.cx}
        cy={props.cy}
        r={props.r}
        onClick={gameAction}
        fill={props.fill}
        className={classNames()}
      >
        {/* {props.id} */}
      </circle>
    );
  }

  // if (props.fill === "red") {
  //   return (
  //     <image
  //       key={props.id}
  //       id={props.id}
  //       x={props.cx - 40}
  //       y={props.cy - 40}
  //       width={80}
  //       height={80}
  //       onClick={gameAction}
  //       xlinkHref={TokenPlayer2}
  //       className={classNames()}
  //     />
  //   );
  // }

  // return (
  //   <image
  //     key={props.id}
  //     id={props.id}
  //     x={props.cx - 40}
  //     y={props.cy - 40}
  //     width={80}
  //     height={80}
  //     onClick={gameAction}
  //     xlinkHref={TokenPlayer1}
  //     className={classNames()}
  //   />
  // );

  return (
    <image
      key={props.id}
      id={props.id}
      x={props.cx - 40}
      y={props.cy - 40}
      width={80}
      height={80}
      onClick={gameAction}
      xlinkHref={props.fill === "red" ? TokenPlayer2 : TokenPlayer1}
      className={classNames()}
    />
  );
};

export default Node;
