import MovieDetails from "./MovieDetails/Index";
import UserGuess from "./UserGuess/Index";
import GuessTabs from "./UserGuess/GuessTabs";
import { useState } from "react";

const GameIndex = (props: any) => {
    const { movieData, gameData, submitAnswer, objToArrConversion, gameOverCheck, focusField, formatAnswerArr, saveResult } = props;

    //Local State
    const [guess, setGuess] = useState('ONE');

    return (
        <div>
            <MovieDetails movieData={movieData} gameOver={gameData.gameOver} isCorrect={gameData.isCorrect} />
            {guess === "ONE" &&
                <UserGuess
                    fieldID={0}
                    movieData={movieData}
                    saveResult={saveResult}
                    previousGuess={gameData.guessesArray[0]}
                    formatAnswerArr={formatAnswerArr}
                    isCorrect={gameData.isCorrect}
                    gameOver={gameData.gameOver}
                    submitAnswer={submitAnswer}
                    focusField={focusField}
                    objToArrConversion={objToArrConversion}
                    guessCount={gameData.guessCount}
                    gameOverCheck={gameOverCheck} />}
            {guess === "TWO" &&
                <UserGuess
                    fieldID={1}
                    movieData={movieData}
                    saveResult={saveResult}
                    previousGuess={gameData.guessesArray[1]}
                    formatAnswerArr={formatAnswerArr}
                    isCorrect={gameData.isCorrect}
                    gameOver={gameData.gameOver}
                    submitAnswer={submitAnswer}
                    focusField={focusField}
                    objToArrConversion={objToArrConversion}
                    guessCount={gameData.guessCount}
                    gameOverCheck={gameOverCheck} />}
            {guess === "THREE" &&
                <UserGuess
                    fieldID={2}
                    movieData={movieData}
                    saveResult={saveResult}
                    previousGuess={gameData.guessesArray[2]}
                    formatAnswerArr={formatAnswerArr}
                    isCorrect={gameData.isCorrect}
                    gameOver={gameData.gameOver}
                    submitAnswer={submitAnswer}
                    focusField={focusField}
                    objToArrConversion={objToArrConversion}
                    guessCount={gameData.guessCount}
                    gameOverCheck={gameOverCheck} />}
            <GuessTabs guess={guess} setGuess={setGuess} isCorrect={gameData.isCorrect} gameOver={gameData.gameOver} />
        </div>
    );
}

export default GameIndex;