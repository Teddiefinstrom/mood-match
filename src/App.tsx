import { useState } from "react";
import Quiz from "./components/Quiz";

function App() {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <>
      {!showQuiz ? (
        <div className="quiz-container">
          <div className="container">
            <h1>What will you listen to today?</h1>
            <p>Take the quiz and find what album matches your mood</p>
            <button className="start-btn" onClick={() => setShowQuiz(true)}>
              {" "}
              Start Quiz
            </button>
          </div>
        </div>
      ) : (
        <Quiz />
      )}
    </>
  );
}

export default App;
