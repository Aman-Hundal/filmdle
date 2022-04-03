import "../styles/UserGuess.css";
import {useState} from 'react';

const UserGuess = (props: any) => {
  const {answer} = props;
  const answerArray = "goodfellas".split("");
  const [guess, setGuess]: any = useState({});

  const submitAnswer = (userInput: any, guessObj: any, answerArray: any) => {
    const guessArray: string[] = [];
    if(userInput === "Enter") {
      for (let key in guessObj) {
        if (key !== "newKey") {
          guessArray.push(guessObj[key]);
        }
      }
      console.log("guess", guessArray);
      console.log("answer", answerArray);
    }
  }

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