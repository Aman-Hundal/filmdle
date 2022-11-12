import classNames from "classnames";
import MovieInfo from "./MovieInfo";

const MoviePoster = (props: any) => {
    const { isCorrect, gameOver, movieData } = props;

    //Constants
    let flipContainer: string = classNames('non-flip', { "flip-container": isCorrect || gameOver });
    let fadeOut: string = classNames('bottom', { "bottom-fade": isCorrect || gameOver });
    const movieImage: string = movieData.image;

    return (
        // <div className={flipContainer}>
        //     <div className="flipper">
        //         <div className="front">
        //             <MovieInfo movieData={movieData} answer={answer} />
        //         </div>
        //         <div className="back">
        //             <img alt="movie-poster" className="poster" src={movieImage}></img>
        //         </div>
        //     </div>
        // </div>
        <div className="fade-container">
            <img alt="movie-poster" className="top" src={movieImage} />
            <div className={fadeOut}>
                <MovieInfo movieData={movieData} />
            </div>
        </div>
    );
}

export default MoviePoster;