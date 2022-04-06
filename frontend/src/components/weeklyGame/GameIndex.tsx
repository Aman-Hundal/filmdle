import MovieDetails from "./MovieDetails";
import UserGuess from "./UserGuess";

const GameIndex = (props: any) => {
    const { movieData, isCorrectAnswer, answer, submitAnswer, ObjToArrConversion } = props;
    return (
        <div>
            <MovieDetails movieData={movieData} isCorrectAnswer={isCorrectAnswer} />
            <UserGuess movieData={movieData} isCorrectAnswer={isCorrectAnswer} answer={answer} submitAnswer={submitAnswer} ObjToArrConversion={ObjToArrConversion} />
            <UserGuess movieData={movieData} isCorrectAnswer={isCorrectAnswer} answer={answer} submitAnswer={submitAnswer} ObjToArrConversion={ObjToArrConversion} />
            <UserGuess movieData={movieData} isCorrectAnswer={isCorrectAnswer} answer={answer} submitAnswer={submitAnswer} ObjToArrConversion={ObjToArrConversion} />
        </div>
    )
};

export default GameIndex;