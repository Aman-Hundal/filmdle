import { useState, useEffect } from "react";
import axios from 'axios';

const useAppData = function() {
  interface Movie {
    [apiData: string]: string | string[]; 
  };
  
  const [state, setState]: any = useState({
    movie: {},
    guessCount: 0,
    answer: "",
    gameOn: false,
    previousAnswer: [""] // DO NOT NEED?
  });

  const movieID: string = 'tt1877830';
  const movieURL: string = `https://imdb-api.com/en/API/Title/k_m0tl1spq/${movieID}`;

  const submitAnswer = (guessObj: any, answerArray: string[]) => {
    const guessArray: string[] = objToArrConversion(guessObj)
      console.log("guess", guessArray);
      console.log("answer", answerArray);

      // if (answerCheck(guessArray, answerArray)) {
      //   setState((prev: any) => ({...prev, gameOn: false }));

      // }
      setState((prev: any) => ({...prev, guessCount: state.guessCount + 1 }));
  };

  const answerCheck = (guessArray: string[], answerArray: string[]): boolean => {
    return true;
  };

  const gameOverCheck = (guessCount: number) => {
    if(guessCount === 3) {
      setState((prev: any) => ({...prev, gameOn: false }));
    }
  };

  const objToArrConversion = (obj: any): string[] => {
    const resultArr: string[] = [];
    for (let key in obj) {
      if (key !== "newKey") {
        resultArr.push(obj[key].toLowerCase());
      }
    }
    return resultArr;
  };

  const arrToObjConversion = (arr: string[]) => {
    const resultObj: any= {};

    arr.forEach((char: string, index: number) => {
      if(char !== " ") {
        resultObj[index] = char;
      }
    })

    return resultObj;
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
    objToArrConversion,
    arrToObjConversion
  };
  
};

export default useAppData;