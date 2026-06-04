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

  const highestScoredAlbums = albumResult.filter(
    (highest) => highest.score === winner.score,
  );

  const finalWinner = useMemo(() => {
    // eslint-disable-next-line react-hooks/purity
    const random = Math.floor(Math.random() * highestScoredAlbums.length);
    return highestScoredAlbums[random];
  }, [highestScoredAlbums]);

  console.log(winner.score);

  return (
    <>
      <div className="quiz-container result-card">
        <div className="container result-content">
          <p className="result-label">Your Album Match</p>

          <img
            className="album-img"
            src={finalWinner.album.coverUrl}
            alt={`${finalWinner.album.title} album cover`}
          />

          <h2>{finalWinner.album.title}</h2>
          <p className="album-artist">{finalWinner.album.artist}</p>
          <p className="album-year">{finalWinner.album.year}</p>
          <p className="album-description">{finalWinner.album.description}</p>
        </div>
      </div>
    </>
  );
};

export default QuizResult;
