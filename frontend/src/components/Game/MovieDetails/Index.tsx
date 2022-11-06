import { Stack, Grid, Box } from "@mui/material";
import "../../../styles/MovieDetails.css";
import MovieInfo from "./MovieInfo";
import MoviePoster from "./MoviePoster";

const MovieDetails = (props: any) => {
  const { movieData, gameOver, isCorrect, answer } = props;

  return (
    <Box
      className="movie-header"
    >
      <MoviePoster movieData={movieData} gameOver={gameOver} isCorrect={isCorrect} />
      <MovieInfo movieData={movieData} answer={answer} />
    </Box >
  );
}

export default MovieDetails;