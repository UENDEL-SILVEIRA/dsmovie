import MovieStarts from "assets/components/MovieStarts";
import "./styles.css";

function MovieScore() {
  const score = 3.5;
  const count = 4.0;

  return (
    <div className="dsmovie-score-container">
      <p className="dsmovie-score-value">
        {score > 0 ? score.toFixed(1) : "-"}
      </p>
      <MovieStarts />
      <p className="dsmovie-score-count">{count} avaliações</p>
    </div>
  );
}

export default MovieScore;
