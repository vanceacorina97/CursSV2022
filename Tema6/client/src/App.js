import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

import FeedbackInput from "./components/FeedbackInput";
import Matrix from "./components/Matrix";

function App() {

  const [connectedSocket, setConnectedSocket] = useState(null);
  const [matrix, setMatrix] = useState([["", "", ""], ["", "", ""], ["", "", ""]]);
  const [colorPalette, setColorPalette] = useState([
    ["#ffff87", "#ffff87", "#ffff87"],
    ["#ffff87", "#ffff87", "#ffff87"],
    ["#ffff87", "#ffff87", "#ffff87"]
  ]);
  const [selected, setSelected] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  useEffect(() => {
    const socket = io();
    setConnectedSocket(socket);
    socket.on("data", data => {
      setMatrix(data.serverMatrix);
      setColorPalette(data.serverColorPalette);
    });
  }, []);


  const feedbackHandler = value => {
    if (!value) {
      setFeedbackMessage("No feedback was introduced!");
    } else if (!selected) {
      setFeedbackMessage("No note was selected!");
    } else {
      setFeedbackMessage("Thank you for your feedback!");
      connectedSocket.emit("feedback", {
        value,
        selected,
      });
    }
  };

  return (
    <React.Fragment>
      {!feedbackMessage
        ? <FeedbackInput selected={selected} feedbackHandler={feedbackHandler} />
        : <h1
          style={{ textAlign: "center", cursor: "pointer" }}
          onClick={() => setFeedbackMessage("")}
        >{feedbackMessage}</h1>}
      <Matrix
        matrix={matrix}
        colorPalette={colorPalette}
        selectedHandler={id => setSelected(id)}
      />
    </React.Fragment>
  );
}

export default App;
