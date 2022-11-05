import "../../../styles/UserGuess.css";
import { useState } from 'react';
import { useEffect } from "react";
import EmptyGuess from "./EmptyGuess";
import AnimatedGuess from "./AnimatedGuess";
import DisabledGuess from "./DisabledGuess";
import SubmittedGuess from "./SubmittedGuess";

const UserGuess = (props: any) => {
  //TypeScript
  // type Guess = {
  //   letter: string;
  // }

  const { answer, previousGuess, fieldID, submitAnswer, objToArrConversion, gameOverCheck, guessCount, isCorrect, focusField, transition, back, formatAnswerArr } = props;

  //Local State
  const [guess, setGuess]: any = useState({});
  const [submitted, setSubmitted]: any = useState(false);
  //WIP
  const [firstTime, setFirstTime] = useState(true);

  //Constants
  const formattedAnswerArray: string[] = formatAnswerArr(answer);

  //Handle Submit function which takes in a users guess.
  const handleSubmit = (event: any) => {
    if (event.key === "Enter") {
      submitAnswer(guess, answer, fieldID);
      // console.log(formattedAnswerArray)
      setSubmitted((prev: any) => prev = true);
    }
  };

  //useEffect to see if game is over or not. If guessCount = 3 the game is over.
  useEffect(() => {
    gameOverCheck(guessCount)
  }, [guessCount])

  return (
    <div className="main-input">
      <form onKeyDown={(event) => { handleSubmit(event) }} autoComplete="off">
        <div className="user-input">
          {submitted ?
            <AnimatedGuess
              formattedAnswerArray={formattedAnswerArray}
              objToArrConversion={objToArrConversion}
              guess={guess}
              answer={answer} />
            : isCorrect && !submitted ?
              <DisabledGuess
                formattedAnswerArray={formattedAnswerArray}
                previousGuess={previousGuess} />
              : previousGuess ?
                <SubmittedGuess
                  formattedAnswerArray={formattedAnswerArray}
                  previousGuess={previousGuess} />
                : <EmptyGuess
                  formattedAnswerArray={formattedAnswerArray}
                  guess={guess}
                  setGuess={setGuess}
                  focusField={focusField} />}
        </div>
      </form>
      <div className="buttons">
        <p className="buttons-content" onClick={event => back()}>Back</p>
        <p className="buttons-content" onClick={event => transition()}>Next</p>
      </div>
    </div>
  )
};

export default UserGuess;