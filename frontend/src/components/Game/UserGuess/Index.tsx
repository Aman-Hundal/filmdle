import "../../../styles/UserGuess.css";
import { useState } from 'react';
import { useEffect } from "react";

const UserGuess = (props: any) => {
  // type Guess = {
  //   letter: string;
  // }
  const { answer, previousGuess, fieldID, submitAnswer, objToArrConversion, gameOverCheck, guessCount, isCorrect, focusField, transition, back, formatAnswerArr } = props;

  //Local State
  const [guess, setGuess]: any = useState({});
  const [submitted, setSubmitted]: any = useState(false);
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

  if (!firstTime) {
    return (
      <div className="main-input">
        <div className="user-input">
          {formattedAnswerArray.map((char: string, index: number) => {
            if (char === "|") {
              return <br key={index} />
            }
            if (char === previousGuess[index]) {
              return <input style={{ animationDelay: `${index * 0.5}s` }} type="text" key={index} disabled value={char} maxLength={1} className="input-boxes-correct-no-anim"></input>;
            } else if (formattedAnswerArray.includes(previousGuess[index])) {
              return <input style={{ animationDelay: `${index * 0.5}s` }} type="text" key={index} disabled value={previousGuess[index]} maxLength={1} className="input-boxes-includes-no-anim"></input>;
            } else {
              return <input style={{ animationDelay: `${index * 0.5}s` }} type="text" key={index} disabled value={previousGuess[index]} maxLength={1} className="input-boxes-incorrect-no-anim"></input>;
            }
          })
          }
        </div>
        <div className="buttons">
          <p className="buttons-content" onClick={event => back()}>Back</p>
          <p className="buttons-content" onClick={event => transition()}>Next</p>
        </div>
      </div>
    )
  };

  return (
    <div className="main-input">
      <form onKeyDown={(event) => { handleSubmit(event) }} autoComplete="off">
        <div className="user-input">
          {submitted ? formattedAnswerArray.map((char: string, index: number) => {
            const guessArray: string[] = objToArrConversion(guess, answer);
            if (char === "|") {
              return <br key={index} />
            }
            if (char === guessArray[index]) {
              // console.log("CORRECT", index, char);
              return <input style={{ animationDelay: `${index * 0.5}s` }} type="text" key={index} disabled value={char} maxLength={1} className="input-boxes-correct"></input>;
            } else if (formattedAnswerArray.includes(guessArray[index])) {
              // console.log("INCLUDES", index, guessArray[index]);
              return <input type="text" key={index} style={{ animationDelay: `${index * 0.5}s` }} disabled value={guessArray[index]} maxLength={1} className="input-boxes-includes"></input>;
            } else {
              // console.log("WRONG VALUE", index, guessArray[index]);
              return <input type="text" style={{ animationDelay: `${index * 0.5}s` }} key={index} disabled value={guessArray[index]} maxLength={1} className="input-boxes-incorrect"></input>;
            }
          }) : isCorrect && !submitted ? formattedAnswerArray.map((char: string, index: number) => {
            if (char !== "|") {
              return <input style={{ backgroundColor: "lightgrey", borderColor: "white" }} type="text" key={index} disabled value={""} maxLength={1} className="input-boxes"></input>;
            } else {
              return <br key={index} />
            }
          }) : formattedAnswerArray.map((char: string, index: number) => {
            if (char !== "|") {
              if (index === 0) {
                return <input
                  type="text"
                  autoFocus
                  key={index}
                  onChange={(event: any) => {
                    const newKey = guess[index] = event.target.value;
                    setGuess((prev: any) => ({ ...prev, newKey }));
                    console.log(guess);
                  }}
                  onKeyDown={(event: any) => {
                    // const newKey = guess[index] = event.target.value;
                    // setGuess((prev: any) => ({...prev, newKey}));
                    focusField(event)
                  }}
                  maxLength={1}
                  className="input-boxes"></input>
              }
              return <input
                type="text"
                key={index}
                onChange={(event: any) => {
                  const newKey = guess[index] = event.target.value;
                  setGuess((prev: any) => ({ ...prev, newKey }));
                  console.log(guess);
                }}
                onKeyDown={(event: any) => {
                  // const newKey = guess[index] = event.target.value;
                  // setGuess((prev: any) => ({...prev, newKey}));
                  focusField(event)
                }}
                maxLength={1}
                className="input-boxes"></input>
            } else {
              return <br key={index} />
            }
          })}
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