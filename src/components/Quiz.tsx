import { useState } from "react";
import { questions } from "../data/questions";
import QuizResult from "./QuizResult";
import type { AlbumTag } from "../types/Album";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedTags, setSelectedTags] = useState<AlbumTag[]>([]);

  console.log(selectedTags)

  return (
    <>
      {questions[currentQuestionIndex] ? (
        <div className="quiz-container">
          <div className="container">
            <h2>{questions[currentQuestionIndex].id}</h2>
            <p>{questions[currentQuestionIndex].question}</p>
            {questions[currentQuestionIndex].options.map((opt) => (
              <button
                key={opt.text}
                className="options-btn"
                onClick={() => {
                  setSelectedTags([...selectedTags, ...opt.albumTags]);
                  setCurrentQuestionIndex(currentQuestionIndex + 1);
                }}
              >
                {opt.text}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <QuizResult selectedTags={selectedTags} />
      )}
    </>
  );
};

export default Quiz;
