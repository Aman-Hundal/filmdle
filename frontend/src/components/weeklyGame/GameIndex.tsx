import MovieDetails from "./MovieDetails";
import UserGuess from "./UserGuess";

const GameIndex = (props: any) => {
    const { movieData, gameOver, answer, submitAnswer, objToArrConversion, gameOverCheck, guessCount, isCorrect, focusField } = props;
    return (
        <div>
            <MovieDetails movieData={movieData} gameOver={gameOver} isCorrect={isCorrect} answer={answer} />
            <UserGuess movieData={movieData} isCorrect={isCorrect} gameOver={gameOver} answer={answer} submitAnswer={submitAnswer} focusField={focusField} objToArrConversion={objToArrConversion} guessCount={guessCount} gameOverCheck={gameOverCheck}  />
            <UserGuess movieData={movieData} isCorrect={isCorrect} gameOver={gameOver} answer={answer} submitAnswer={submitAnswer} focusField={focusField} objToArrConversion={objToArrConversion} guessCount={guessCount} gameOverCheck={gameOverCheck}  />
            <UserGuess movieData={movieData} isCorrect={isCorrect} gameOver={gameOver} answer={answer} submitAnswer={submitAnswer} focusField={focusField} objToArrConversion={objToArrConversion} guessCount={guessCount} gameOverCheck={gameOverCheck}  />
        </div>
    )
};

export default GameIndex;