import MovieDetails from "./MovieDetails/Index";
import UserGuess from "./UserGuess/Index";
import GuessTabs from "./UserGuess/GuessTabs";
import { useState } from "react";

const GameIndex = (props: any) => {
    const { movieData, guessesArray, gameOver, answer, submitAnswer, objToArrConversion, gameOverCheck, guessCount, isCorrect, focusField, formatAnswerArr } = props;

    //Local State
    const [guess, setGuess] = useState('ONE');

    return (
        <div>
            <MovieDetails movieData={movieData} gameOver={gameOver} isCorrect={isCorrect} answer={answer} />
            {guess === "ONE" && <UserGuess fieldID={0} previousGuess={guessesArray[0]} formatAnswerArr={formatAnswerArr} movieData={movieData} isCorrect={isCorrect} gameOver={gameOver} answer={answer} submitAnswer={submitAnswer} focusField={focusField} objToArrConversion={objToArrConversion} guessCount={guessCount} gameOverCheck={gameOverCheck} />}
            {guess === "TWO" && <UserGuess fieldID={1} previousGuess={guessesArray[1]} formatAnswerArr={formatAnswerArr} movieData={movieData} isCorrect={isCorrect} gameOver={gameOver} answer={answer} submitAnswer={submitAnswer} focusField={focusField} objToArrConversion={objToArrConversion} guessCount={guessCount} gameOverCheck={gameOverCheck} />}
            {guess === "THREE" && <UserGuess fieldID={2} previousGuess={guessesArray[2]} formatAnswerArr={formatAnswerArr} movieData={movieData} isCorrect={isCorrect} gameOver={gameOver} answer={answer} submitAnswer={submitAnswer} focusField={focusField} objToArrConversion={objToArrConversion} guessCount={guessCount} gameOverCheck={gameOverCheck} />}
            <GuessTabs guess={guess} setGuess={setGuess} isCorrect={isCorrect} />
        </div>
    );
}

export default GameIndex;