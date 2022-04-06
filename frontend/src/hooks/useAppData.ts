import { useState, useEffect } from "react";
import axios from 'axios';

const useAppData = function() {
  interface Movie {
    [apiData: string]: string | string[]; 
  };
  
  const [state, setState]: any = useState({
    movie: {},
    isCorrectAnswer: true,
    guessCount: 0,
    answer: "",
    gameOn: false,
    previousAnswer: [""]
  });

  const movieID: string = 'tt1877830';
  const movieURL: string = `https://imdb-api.com/en/API/Title/k_m0tl1spq/${movieID}`;

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

  useEffect(() => {
    axios.get(movieURL)
    .then((res) => {
      setState((prev: any) => ({...prev, answer: res.data.title, movie: res.data }));
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);

  return {
    state,
    submitAnswer
  };
  
};

export default useAppData;