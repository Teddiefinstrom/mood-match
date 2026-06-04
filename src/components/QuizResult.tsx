import { useMemo } from "react";
import { albums } from "../data/albums";
import type { AlbumTag } from "../types/Album";

interface QuizResultProps {
  selectedTags: AlbumTag[];
}

const QuizResult = ({ selectedTags }: QuizResultProps) => {
  console.log(selectedTags);

  const albumResult = albums.map((a) => {
    const matchingTags = a.albumTags.filter((tag) =>
      selectedTags.includes(tag),
    );

    const score = matchingTags.length;

    return {
      album: a,
      score: score,
    };
  });

      console.log(albumResult);

  const winner = albumResult.reduce((bestSoFar, currentItem) => {
    if (bestSoFar.score > currentItem.score) {
      return bestSoFar;
    } else {
      return currentItem;
    }
  });

  const highestScoredAlbums = albumResult.filter((highest) => (highest.score === winner.score));

const finalWinner = useMemo(() => {
  // eslint-disable-next-line react-hooks/purity
  const random = Math.floor(Math.random() * highestScoredAlbums.length);
  return highestScoredAlbums[random];
}, [highestScoredAlbums]);

  console.log(winner.score);
  

  return (
    <>
      <div className="quiz-container">
        <div className="container">
          <p>Your result:</p>
          <h2>{finalWinner.album.title}</h2>
          <p>{finalWinner.album.year}</p>
          <p>{finalWinner.album.artist}</p>
          <img src={finalWinner.album.coverUrl} alt={`${finalWinner.album.title} album cover`} />
          <p>{finalWinner.album.description}</p>
        </div>
      </div>
    </>
  );
};

export default QuizResult;
