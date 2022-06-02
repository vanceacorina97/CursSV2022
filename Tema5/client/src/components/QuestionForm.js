import { useState } from "react";

const QuestionForm = ({ question, socket }) => {
  const [inputAnswer, setInputAnswer] = useState("");
  const [questionSent, setQuestionSent] = useState(false);

  const submitForm = () => {
    if (inputAnswer) {
      setQuestionSent(true);
      socket.emit("new-data", { inputAnswer });
    }
  };

  return (
    <div className="form-container">
      <h1>{question}</h1>
      {!questionSent ? (
        <div>
          <input onChange={(e) => setInputAnswer(e.target.value)}></input>
          <button
            onClick={() => submitForm()}
            className={!inputAnswer ? "btn-disabled" : ""}
          >
            Send!
          </button>
        </div>
      ) : (
        <div>Mulțumim pentru răspuns!</div>
      )}
    </div>
  );
};
export default QuestionForm;
