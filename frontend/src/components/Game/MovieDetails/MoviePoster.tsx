import classNames from "classnames";
import { Stack } from "@mui/material";

const MoviePoster = (props: any) => {
    const { isCorrect, gameOver, movieData } = props;

    //Constants
    let flipContainer: string = classNames('non-flip', { "flip-container": isCorrect || gameOver });
    const movieImage: string = movieData.image;

    return (
        <Stack
            sx={{ width: "100%" }}
            justifyContent="center"
            alignItems="center">
            <div className={flipContainer}>
                <div className="flipper">
                    <div style={{ borderColor: "lightgrey" }} className="front">
                        <p className="unknown-text">?</p>
                    </div>
                    <div className="back">
                        <img alt="movie-poster" className="poster" src={movieImage}></img>
                    </div>
                </div>
            </div>
        </Stack>
    );
}

export default MoviePoster;