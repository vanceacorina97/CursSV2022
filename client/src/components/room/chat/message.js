const Message = ({ name, message }) => {
  return <li style={{ padding: 5 }}>[{name}]:{message}</li>;
};

export default Message;
