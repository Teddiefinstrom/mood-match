import { useState } from "react";
import { questions } from "../data/questions";
import QuizResult from "./QuizResult";
import type { AlbumTag } from "../types/Album";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedTags, setSelectedTags] = useState<AlbumTag[]>([]);

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return <QuizResult selectedTags={selectedTags} />;
  }

  return (
    <div className="quiz-container">
      <div className="container">
        <p className="question-count">
          Question {currentQuestionIndex + 1} / {questions.length}
        </p>

        <h2>{currentQuestion.question}</h2>

        <div className="options-wrapper">
          {currentQuestion.options.map((opt) => (
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
    </div>
  );
};

export default Quiz;