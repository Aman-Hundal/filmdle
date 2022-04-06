import "../styles/UserGuess.css";
import {useState} from 'react';

const UserGuess = (props: any) => {
  type Guess = {
    letter: string;
  }

  const [guess, setGuess]: any = useState({});

  const {answer, submitAnswer} = props;
  const answerArray: string[] = answer.replace(/\s+/g, "").toLowerCase().split("");

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