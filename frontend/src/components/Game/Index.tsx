import useVisualMode from "../../hooks/useVisualMode";
import MovieDetails from "./MovieDetails/Index";
import UserGuess from "./UserGuess/Index";

const GameIndex = (props: any) => {
    const { movieData, guessesArray, gameOver, answer, submitAnswer, objToArrConversion, gameOverCheck, guessCount, isCorrect, focusField, formatAnswerArr } = props;
    const { mode, transition, back } = useVisualMode("guessOne");
    return (
        <div>
            <MovieDetails movieData={movieData} gameOver={gameOver} isCorrect={isCorrect} answer={answer} />
            {mode === "guessOne" && <UserGuess fieldID={0} previousGuess={guessesArray[0]} formatAnswerArr={formatAnswerArr} transition={() => transition("guessTwo")} movieData={movieData} isCorrect={isCorrect} gameOver={gameOver} answer={answer} submitAnswer={submitAnswer} focusField={focusField} objToArrConversion={objToArrConversion} guessCount={guessCount} gameOverCheck={gameOverCheck} />}
            {mode === "guessTwo" && <UserGuess fieldID={1} previousGuess={guessesArray[1]} formatAnswerArr={formatAnswerArr} back={back} transition={() => transition("guessThree")} movieData={movieData} isCorrect={isCorrect} gameOver={gameOver} answer={answer} submitAnswer={submitAnswer} focusField={focusField} objToArrConversion={objToArrConversion} guessCount={guessCount} gameOverCheck={gameOverCheck} />}
            {mode === "guessThree" && <UserGuess fieldID={2} previousGuess={guessesArray[2]} formatAnswerArr={formatAnswerArr} back={back} movieData={movieData} isCorrect={isCorrect} gameOver={gameOver} answer={answer} submitAnswer={submitAnswer} focusField={focusField} objToArrConversion={objToArrConversion} guessCount={guessCount} gameOverCheck={gameOverCheck} />}
        </div>
    )
};

export default GameIndex;