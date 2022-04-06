import MovieDetails from "./MovieDetails";
import UserGuess from "./UserGuess";

const GameIndex = (props: any) => {
    const { movieData, isCorrectAnswer, answer } = props;
    return (
        <div>
            <MovieDetails movieData={movieData} isCorrectAnswer={isCorrectAnswer} />
            <UserGuess movieData={movieData} isCorrectAnswer={isCorrectAnswer} answer={answer} />
            <UserGuess movieData={movieData} isCorrectAnswer={isCorrectAnswer} answer={answer} />
            <UserGuess movieData={movieData} isCorrectAnswer={isCorrectAnswer} answer={answer} />
        </div>
    )
};

export default GameIndex;