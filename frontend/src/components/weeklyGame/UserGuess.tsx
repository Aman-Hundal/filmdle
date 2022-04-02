import "../styles/UserGuess.css";
import {useState} from 'react';

const UserGuess = (props: any) => {
  const {answer} = props;
  const answerArray = answer.split("");
  const [guess, setGuess]: any = useState({});

  const submitAnswer = (input: any) => {
    if(input === "Enter") {
      console.log(guess)
    }
  }

  return (
    <form onKeyDown={event => {submitAnswer(event.key)}} autoComplete="off">
      <div className="user-input">
        {answerArray.map((char: any, index: number) => {
          if(char !== " ") {
            const objKey = index.toString();
            return <input type="text" key={index} onChange={(event) => {
              const newKey = guess[index] = event.target.value;
              setGuess((prev: any) => ({...prev, newKey}));
              // console.log(objKey);
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