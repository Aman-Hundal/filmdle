// require('dotenv').config();
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
    guessesArray: []
  });
  // tt1877830 // tt0120737 //tt0086190 //  // tt1877830 tt0080684
  const movieID: string = 'tt1877830';
  const movieURL: string = `https://imdb-api.com/en/API/Title/k_m0tl1spq/${movieID}`;

  const submitAnswer = (guessObj: any, answer: string, field: number) => {
    const guessArray: string[] = objToArrConversion(guessObj, answer);
    const formattedArray: string[] = formatAnswerArr(answer);
    const answerArray: string[] = formattedArray.map((elm: string, index: number) => {
      if(elm === "|") {
        return elm = "";
      }

      return elm;
    })

      console.log("guess", guessArray);
      console.log("answer", answerArray);

      if (answerCheck(guessArray, answerArray)) {
        const copyArr =  [...state.guessesArray];
        copyArr[field] = guessArray;
        setState((prev: any) => ({...prev, isCorrect: true,  guessCount: state.guessCount + 1, guessesArray: copyArr}));
      } else {
        const copyArr =  [...state.guessesArray];
        copyArr[field] = guessArray;
        setState((prev: any) => ({...prev, guessCount: state.guessCount + 1, guessesArray: copyArr}));
      }
  
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

  // const guessStringConversion = (guessArray: string[]): string => {

  //   return ""
  // }

  const gameOverCheck = (guessCount: number): boolean => {
    if(guessCount === 3) {
      setState((prev: any) => ({...prev, gameOver: true }));
      return true;
      // console.log("GAME IS OVER", guessCount)
    }

    // console.log("GAME IS NOT OVER", guessCount)
    return false;
  };

  const focusField = (event: any) => {
    const form = event.target.form;
    const index = [...form].indexOf(event.target);
    const disallowedKeys = ["delete", "backspace"];
    if (disallowedKeys.includes(event.key.toLowerCase()) && event.target.value === "") {
      form.elements[index - 1].focus();
    } 
    if (!disallowedKeys.includes(event.key.toLowerCase()) && (event.target.value !== "")) {
      form.elements[index + 1].focus();
    }
  };

  const objToArrConversion = (obj: any, answer: string): string[] => {
    const answerLen: number = answer.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s+/g, "").toLowerCase().length;
    const resultArr: string[] = new Array(answerLen).fill("");
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
  
  const formatAnswerArr = (answer: string): string[] => {
    const lineBreak = '|'
    const words = answer.toLowerCase().split(" ");
    let newStr: any = words.shift()
    let charCount = newStr.length;
    const breakCount = Math.round((answer.length) / 3);

    words.forEach(function(word, i) {
      charCount += word.length + 1;
      if (charCount <= breakCount) {
        newStr += ' ';
      } else {
        newStr += lineBreak;
        charCount = word.length;
      }
      newStr += word;
    });

    return newStr.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s+/g, "").split("");

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
    gameOverCheck,
    focusField,
    formatAnswerArr
  };
  
};

export default useAppData;