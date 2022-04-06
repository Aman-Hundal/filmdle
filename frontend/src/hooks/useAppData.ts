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

  const submitAnswer = (guessObj: any, answerArray: string[]) => {
    const guessArray: string[] = ObjToArrConversion(guessObj)
      console.log("guess", guessArray);
      console.log("answer", answerArray);
  };

  const ObjToArrConversion = (guessObj: any) => {
    const objArray: string[] = [];
    for (let key in guessObj) {
      if (key !== "newKey") {
        objArray.push(guessObj[key].toLowerCase());
      }
    }
    return objArray;
  };

    /*  submit answer -> 
   - clean up both data sets (answer and guess) - make its own function?
   - change submitted state to true which will: 
      - compare both data sets of string arrays and confirm if they match -> MAKE THE TWO DATA SETS AN OBJECT OF INDEX: CHAR NOT STRING ARRAYS
        -if key and value (index and char) match = make the input box green , if value exists but key is incorrect (index not correct but value is there) = make the box yellow, else make the box red
      - lock the userGuess field so no more input can be had -> own function?
   - increase guessCount by 1 on each submission -> setState

  */

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
    submitAnswer,
    ObjToArrConversion
  };
  
};

export default useAppData;