import MovieDetails from "./MovieDetails";
import UserGuess from "./UserGuess";

const GameIndex = (props: any) => {
    const { movieData, gameOver, answer, submitAnswer, objToArrConversion, gameOverCheck, guessCount, isCorrect } = props;
    return (
        <div>
            <MovieDetails movieData={movieData} gameOver={gameOver}   isCorrect={isCorrect} />
            <UserGuess movieData={movieData} isCorrect={isCorrect} gameOver={gameOver} answer={answer} submitAnswer={submitAnswer} objToArrConversion={objToArrConversion} guessCount={guessCount} gameOverCheck={gameOverCheck}  />
            <UserGuess movieData={movieData} isCorrect={isCorrect} gameOver={gameOver} answer={answer} submitAnswer={submitAnswer} objToArrConversion={objToArrConversion} guessCount={guessCount} gameOverCheck={gameOverCheck}  />
            <UserGuess movieData={movieData} isCorrect={isCorrect} gameOver={gameOver} answer={answer} submitAnswer={submitAnswer} objToArrConversion={objToArrConversion} guessCount={guessCount} gameOverCheck={gameOverCheck}  />
        </div>
    )
};

export default GameIndex;