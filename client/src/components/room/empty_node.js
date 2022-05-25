import EmptyNodeSvg from "../../metadata/empty_node_svg";

const EmptyNode = (props) => {
  return <image {...props} width="39" heigth="40" xlinkHref={EmptyNodeSvg} />;
};

export default EmptyNode;
