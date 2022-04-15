import useVisualMode from "../../hooks/useVisualMode";
import MovieDetails from "./MovieDetails";
import UserGuess from "./UserGuess";

const GameIndex = (props: any) => {
    const { movieData, gameOver, answer, submitAnswer, objToArrConversion, gameOverCheck, guessCount, isCorrect, focusField } = props;
    const { mode, transition, back } = useVisualMode("guessOne");
    return (
        <div>
            <MovieDetails movieData={movieData} gameOver={gameOver} isCorrect={isCorrect} answer={answer} />
            {mode === "guessOne" && <UserGuess transition={() => transition("guessTwo")} movieData={movieData} isCorrect={isCorrect} gameOver={gameOver} answer={answer} submitAnswer={submitAnswer} focusField={focusField} objToArrConversion={objToArrConversion} guessCount={guessCount} gameOverCheck={gameOverCheck}  />}
            {mode === "guessTwo" && <UserGuess back={back} transition={() => transition("guessThree")} movieData={movieData} isCorrect={isCorrect} gameOver={gameOver} answer={answer} submitAnswer={submitAnswer} focusField={focusField} objToArrConversion={objToArrConversion} guessCount={guessCount} gameOverCheck={gameOverCheck}  />}
            {mode === "guessThree" && <UserGuess back={back} movieData={movieData} isCorrect={isCorrect} gameOver={gameOver} answer={answer} submitAnswer={submitAnswer} focusField={focusField} objToArrConversion={objToArrConversion} guessCount={guessCount} gameOverCheck={gameOverCheck}  />}
        </div>
    )
};

export default GameIndex;