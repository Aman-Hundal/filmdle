import classNames from "classnames";
import MovieInfo from "./MovieInfo";

const MoviePoster = (props: any) => {
    const { isCorrect, gameOver, movieData, answer, } = props;

    //Constants
    let flipContainer: string = classNames('non-flip', { "flip-container": isCorrect || gameOver });
    let fadeIn: string = classNames('front-fade', { "front-transparent": isCorrect || gameOver });
    const movieImage: string = movieData.image;

    return (
        <div className={flipContainer}>
            <div className="flipper">
                <div className="front">
                    <MovieInfo movieData={movieData} answer={answer} />
                </div>
                <div className="back">
                    <img alt="movie-poster" className="poster" src={movieImage}></img>
                </div>
            </div>
        </div>
        // <>
        //     <img className="back-fade" src={movieImage} />
        //     <div className={fadeIn}>
        //         <MovieInfo movieData={movieData} answer={answer} />
        //     </div>
        // </>
    );
}

export default MoviePoster;