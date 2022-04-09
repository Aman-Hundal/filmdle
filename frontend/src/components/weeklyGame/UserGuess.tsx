import "../styles/UserGuess.css";
import {useState} from 'react';
import { useEffect } from "react";

const UserGuess = (props: any) => {
  type Guess = {
    letter: string;
  }
  const { answer, submitAnswer, objToArrConversion, gameOverCheck, guessCount, isCorrect } = props;
  let input: string;

  const [guess, setGuess]: any = useState({});
  const [submitted, setSubmitted]: any = useState(false);
  
  const answerArray: string[] = answer.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s+/g, "").toLowerCase().split("");
  const handleInput = (event: any) => {
    if(event.key === "Enter") {
      submitAnswer(guess, answerArray);
      setSubmitted((prev: any) => prev = true);
    }
  };
  // const focusField = (event: any, input:string) => {
  //   const form = event.target.form;
  //   const index = [...form].indexOf(event.target)
  //   const disallowedKeys = ["delete", "backspace"]
  //   console.log(event.target.value)
  //   // if (input === "backspace") {
  //   //   form.elements[index - 1].focus();
  //   // } else {
  //   //   form.elements[index + 1].focus();
  //   // }
  //   if ((!disallowedKeys.includes(input))) {
  //     form.elements[index + 1].focus();
  //   } else if (disallowedKeys.includes(input) && event.target.value === "") {
  //     form.elements[index - 1].focus();
  //   }
  // };

  const focusField = (event: any) => {
    const form = event.target.form;
    const index = [...form].indexOf(event.target);
    const disallowedKeys = ["delete", "backspace"]

    if (disallowedKeys.includes(event.key.toLowerCase())) {
      form.elements[index - 1].focus();
    } else {
      form.elements[index + 1].focus();
    }

  }

  useEffect(() => {
    gameOverCheck(guessCount)
  }, [guessCount])

  return (
    <form onKeyDown={(event)=> {handleInput(event)}} autoComplete="off">
      <div className="user-input">
        {submitted ? answerArray.map((char: string, index: number) => {
          const guessArray: string[] = objToArrConversion(guess, answerArray.length);
          // if (!guessArray[index]) {
          //   console.log("BLANK FILL", index, guessArray[index]);
          //   return <input type="text" key={index} disabled value={""} maxLength={1} className="input-boxes-incorrect"></input>;
          // }
          if (char === guessArray[index]) {
            console.log("CORRECT", index, char);
            return <input type="text" key={index} disabled value={char} maxLength={1} className="input-boxes-correct"></input>;
          } else if (answerArray.includes(guessArray[index])) {
            console.log("INCLUDES", index, guessArray[index]);
            return <input type="text" key={index} disabled value={guessArray[index]} maxLength={1} className="input-boxes-includes"></input>;
          } else {
            console.log("WRONG VALUE", index, guessArray[index]);
            return <input type="text" key={index} disabled value={guessArray[index]} maxLength={1} className="input-boxes-incorrect"></input>;
          }
        }) : isCorrect && !submitted ? answerArray.map((char: string, index: number) => {
          if(char !== " ") {
            return <input type="text" key={index} disabled value={""} maxLength={1} className="input-boxes"></input>;
          }
        }) : answerArray.map((char: string, index: number) => {
          if(char !== " ") {
              return <input type="text" key={index} onKeyDown={event => focusField(event)} onChange={(event: any) => {
                const newKey = guess[index] = event.target.value;
                setGuess((prev: any) => ({...prev, newKey}));
                // focusField(event, input);
                console.log(guess);
              }}  maxLength={1} className="input-boxes"></input>
          }})}
      </div>
    </form>
  )
};

export default UserGuess;