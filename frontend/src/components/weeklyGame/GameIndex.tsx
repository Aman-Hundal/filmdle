import MovieDetails from "./MovieDetails";
import UserGuess from "./UserGuess";

const GameIndex = (props: any) => {
    const { movieData, gameOn, answer, submitAnswer, objToArrConversion } = props;
    return (
        <div>
            <MovieDetails movieData={movieData} gameOn={gameOn} />
            <UserGuess movieData={movieData} gameOn={gameOn} answer={answer} submitAnswer={submitAnswer} objToArrConversion={objToArrConversion} />
            <UserGuess movieData={movieData} gameOn={gameOn} answer={answer} submitAnswer={submitAnswer} objToArrConversion={objToArrConversion} />
            <UserGuess movieData={movieData} gameOn={gameOn} answer={answer} submitAnswer={submitAnswer} objToArrConversion={objToArrConversion} />
        </div>
    )
};

export default GameIndex;