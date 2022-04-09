import { useState, useEffect } from "react";
import axios from 'axios';

const useAppData = function() {
  interface Movie {
    [apiData: string]: string | string[]; 
  };
  
  const [state, setState]: any = useState({
    movie: {},
    isCorrect: false,
    guessCount: 0,
    answer: "",
    gameOver: false,
    previousAnswer: [""] // DO NOT NEED?
  });

  const movieID: string = 'tt1877830';
  const movieURL: string = `https://imdb-api.com/en/API/Title/k_m0tl1spq/${movieID}`;

  const submitAnswer = (guessObj: any, answerArray: string[]) => {
    const guessArray: string[] = objToArrConversion(guessObj, answerArray.length);
      console.log("guess", guessArray);
      console.log("answer", answerArray);

      if (answerCheck(guessArray, answerArray)) {
        setState((prev: any) => ({...prev, isCorrect: true }));
      }
      setState((prev: any) => ({...prev, guessCount: state.guessCount + 1 }));
  };

  const answerCheck = (guessArray: string[], answerArray: string[]): boolean => {
    if(answerArray.length !== guessArray.length) {
      return false;
    }

    for (let i = 0; i < answerArray.length; i++) {
      if(answerArray[i] !== guessArray[i]) {
        return false;
      }
    }
    return true;
  };

  const gameOverCheck = (guessCount: number): boolean => {
    if(guessCount === 3) {
      setState((prev: any) => ({...prev, gameOver: true }));
      return true;
      // console.log("GAME IS OVER", guessCount)
    }

    // console.log("GAME IS NOT OVER", guessCount)
    return false;
  };

  const objToArrConversion = (obj: any, arrLength: number): string[] => {
    const resultArr: string[] = new Array(arrLength).fill("");
    for (let key in obj) {
      if (key !== "newKey") {
        resultArr[parseInt(key)] = obj[key].toLowerCase();
      }
    }
    return resultArr;
  };

  const arrToObjConversion = (arr: string[]) => {
    const resultObj: any = {};

    arr.forEach((char: string, index: number) => {
      if(char !== " ") {
        resultObj[index] = char;
      }
    })

    return resultObj;
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
    submitAnswer,
    objToArrConversion,
    arrToObjConversion,
    gameOverCheck
  };
  
};

export default useAppData;