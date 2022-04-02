import "../styles/UserGuess.css";
import {useState} from 'react';

const UserGuess = (props: any) => {
  const [guess, setGuess] = useState("");
  const {answer} = props;
  const answerArray = answer.split("");

  const submitAnswer = (input: string) => {
    if(input === "Enter") {
      console.log(guess.toUpperCase());
    }
  }

  return (
    <form onKeyDown={event => {submitAnswer(event.key)}} autoComplete="off">
      <div className="user-input">
        {answerArray.map((char: string, index: number) => {
          if(char !== " ") {
            return <input type="text" key={index} onChange={event => setGuess((prev) => prev + event.target.value)}  maxLength={1} className="input-boxes"></input>
          }
        })}
      </div>
    </form>
  )
};

export default UserGuess;