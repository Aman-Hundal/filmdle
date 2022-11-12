import { Stack } from "@mui/material";
import "../../../styles/MovieDetails.css";
import MoviePoster from "./MoviePoster";
import { grey } from "@mui/material/colors";

const MovieDetails = (props: any) => {
  const { movieData, gameOver, isCorrect } = props;

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ padding: "1% 0% 1% 0%", width: "100%" }}
    >
      <MoviePoster movieData={movieData} gameOver={gameOver} isCorrect={isCorrect} />
    </Stack >
  );
}

export default MovieDetails;