import "../styles/UserGuess.css";
import {useState} from 'react';

const UserGuess = (props: any) => {
  type Guess = {
    letter: string;
  }

  const [guess, setGuess]: any = useState({});

  const {answer} = props;
  const answerArray: string[] = answer.replace(/\s+/g, "").toLowerCase().split("");

  const submitAnswer = (userInput: string, guessObj: any, answerArray: string[]) => {
    const guessArray: string[] = [];
    if(userInput === "Enter") {
      for (let key in guessObj) {
        if (key !== "newKey") {
          guessArray.push(guessObj[key].toLowerCase());
        }
      }
      console.log("guess", guessArray);
      console.log("answer", answerArray);
    }
  };

  // 

  return (
    <form onKeyDown={event => {submitAnswer(event.key, guess, answerArray)}} autoComplete="off">
      <div className="user-input">
        {answerArray.map((char: string, index: number) => {
          if(char !== " ") {
            return <input type="text" key={index} onChange={(event) => {
              const newKey = guess[index] = event.target.value;
              setGuess((prev: any) => ({...prev, newKey}));
              // console.log(index);
              // console.log(newKey);
              // console.log(event.target.value);
              // console.log(guess)
            }}  maxLength={1} className="input-boxes"></input>
          }
        })}
      </div>
    </form>
  )
};

export default UserGuess;