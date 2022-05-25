import { useEffect, useState } from "react";

const Notification = ({ socket }) => {
  const [message, setMessage] = useState();

  useEffect(() => {
    socket.on("notification", (notification) => {
      setMessage(notification);
      setTimeout(() => {
        setMessage();
      }, 5000);
    });
  }, []);

  if (!message) return null;

  return <div class="notification">{message}</div>;
};

export default Notification;
