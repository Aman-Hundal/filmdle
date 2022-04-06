import "../styles/UserGuess.css";
import {useState} from 'react';

const UserGuess = (props: any) => {
  type Guess = {
    letter: string;
  }

  const [guess, setGuess]: any = useState({});
  const [submitted, setSubmitted]: any = useState(false);
  const {answer, submitAnswer, ObjToArrConversion} = props;
  const answerArray: string[] = answer.replace(/\s+/g, "").toLowerCase().split("");

  const handleInput = (e:string) => {
    if(e === "Enter") {
      submitAnswer(guess, answerArray)
      setSubmitted((prev: any) => prev = true)
    }
  }

  return (
    <form onKeyDown={(event)=> {handleInput(event.key)}} autoComplete="off">
      <div className="user-input">
        {!submitted ? answerArray.map((char: string, index: number) => {
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
        }) : answerArray.map((char: string, index: number) => {
          // IN THIS SECTION GUESS AND ANSWER MUST BE OBJS AND WE MUST COMAPRE
          const guessArray: string[] = ObjToArrConversion(guess);

          if (char === guessArray[index]) {
            return <input type="text" key={index} disabled value={char} maxLength={1} className="input-boxes"></input>
          }

          return <input type="text" key={index} disabled value={""} maxLength={1} className="input-boxes"></input>


        })}
      </div>
    </form>
  )
};

export default UserGuess;