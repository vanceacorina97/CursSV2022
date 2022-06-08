import PlayerArrow from "../../metadata/player_arrow";
import TokenPlayer1 from "../../metadata/token_player_1";
import TokenPlayer2 from "../../metadata/token_player_2";

const Player = (props) => {
  let uncapturred_nodes = [];

  for (let i = props.capturedNodes; i < 9; i++) {
    uncapturred_nodes.push(" ");
  }

  return (
    <div className="card-grid">
      <div
        className={
          props.action !== "wait"
            ? "card-background active-player"
            : "card-background"
        }
      >
        <div className="player-card-header">
          <h4>{props.opponent ? "Opponent" : "You"}</h4>
          <div className="player-tokens-left">
            <div className="player-token-count">X{props.nodesToPlace}</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              style={{
                width: `35px`,
                height: "35px",
              }}
            >
              <image
                key={`node-to-place-${props.opponent ? "opponent" : "current"}`}
                id={props.id}
                width={35}
                height={35}
                x={0}
                xlinkHref={props.opponent ? TokenPlayer2 : TokenPlayer1}
              />
            </svg>
          </div>
        </div>
        <div className="br"></div>

        <div className="nodes-capture-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            style={{
              width: `${props.capturedNodes * 40}px`,
              height: "40px",
              display: "flex",
              margin: "0",
            }}
          >
            {[...Array(props.capturedNodes)].map((_, index) => (
              <image
                key={`node-to-place-${
                  props.opponent ? "opponent" : "current"
                }-${index}`}
                id={props.id}
                width={35}
                height={35}
                x={index * 40}
                xlinkHref={props.opponent ? TokenPlayer1 : TokenPlayer2}
              />
            ))}
          </svg>
          <div className="uncaptured-nodes-container">
            {uncapturred_nodes.map((emptyNode, index) => (
              <div className="uncaptured-node" key={`empty-node-${index}`}>
                {emptyNode}
              </div>
            ))}
          </div>
        </div>

        {props.error && <div className="error">{props.error}</div>}
      </div>
      {props.action !== "wait" ? (
        <div className="player-action">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="player-arrow"
          >
            <image
              id={props.id}
              width={80}
              height={80}
              xlinkHref={PlayerArrow}
            />
          </svg>{" "}
          <div className="action-text">{props.action}</div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Player;
