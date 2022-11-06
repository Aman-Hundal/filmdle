import { Stack } from "@mui/material";
import "../../../styles/MovieDetails.css";
import MoviePoster from "./MoviePoster";

const MovieDetails = (props: any) => {
  const { movieData, gameOver, isCorrect, answer } = props;

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ padding: "0% 0% 2% 0%", width: "100%" }}
    >
      <MoviePoster movieData={movieData} gameOver={gameOver} isCorrect={isCorrect} answer={answer} />
    </Stack >
  );
}

export default MovieDetails;