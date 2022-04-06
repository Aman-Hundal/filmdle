import MovieDetails from "./MovieDetails";
import UserGuess from "./UserGuess";

const GameIndex = (props: any) => {
    const { movieData, isCorrectAnswer, answer, submitAnswer } = props;
    return (
        <div>
            <MovieDetails movieData={movieData} isCorrectAnswer={isCorrectAnswer} />
            <UserGuess movieData={movieData} isCorrectAnswer={isCorrectAnswer} answer={answer} submitAnswer={submitAnswer} />
            <UserGuess movieData={movieData} isCorrectAnswer={isCorrectAnswer} answer={answer} submitAnswer={submitAnswer} />
            <UserGuess movieData={movieData} isCorrectAnswer={isCorrectAnswer} answer={answer} submitAnswer={submitAnswer} />
        </div>
    )
};

export default GameIndex;