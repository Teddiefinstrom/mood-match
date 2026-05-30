import { albums } from "../data/albums";
import type { AlbumTag } from "../types/Album";

interface QuizResultProps {
  selectedTags: AlbumTag[];
}

const QuizResult = ({selectedTags}: QuizResultProps) => {
    

console.log(selectedTags);

  return (
    <>
      <div className="quiz-container">
        <div className="container">
          <p>Your result:</p>
          <h2>{albums[0].title}</h2>
          <p>{albums[0].year}</p>
          <p>{albums[0].artist}</p>
          <img src={albums[0].coverUrl} alt="" />
          <p>{albums[0].description}</p>
        </div>
      </div>
    </>
  );
};

export default QuizResult;
