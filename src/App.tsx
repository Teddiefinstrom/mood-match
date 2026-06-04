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
            <p>Not sure what to listen to? Let your mood decide.</p>
            <button className="start-btn" onClick={() => setShowQuiz(true)}>
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
