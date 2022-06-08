import Nodes from "../../metadata/nodes";
import Node from "./node";

const NodeList = (props) => {
  return Nodes.map((node) => {
    return (
      <Node
        key={node.id}
        isEmpty={!props.nodes[node.id].value}
        fill={
          props.nodes[node.id].value === props.socket.id ? "#1976d2" : "red"
        }
        socket={props.socket}
        action={props.action}
        {...node}
      />
    );
  });
};

export default NodeList;
