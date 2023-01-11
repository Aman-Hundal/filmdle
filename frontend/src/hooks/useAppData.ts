import { useState, useEffect } from "react";
import axios from 'axios';

const useAppData = function () {
  interface Movie {
    [apiData: string]: string | string[];
  };

  // Set expiry date of localstorage/user info to be the upcoming Sunday.
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + ((6 - expiry.getDay()) % 7 + 1) % 7);

  //Global State
  const [gameState, setGameState]: any = useState(
    localStorage.getItem("gameData") ? JSON.parse(localStorage.getItem("gameData") || "{}") :
      {
        isCorrect: false,
        guessCount: 0,
        gameOver: false,
        guessesArray: [], // [{id: 1, guessArray: [], guessCompleted: bool }]. Currently an [ [], [], [] ]
        timestamp: expiry,
      }
  );
  const [movieState, setMovieState]: any = useState({});
  const [ip, setIp] = useState("");
  const [loading, setLoading]: any = useState(true);

  //Clear local storage if date > expiry date
  const currentDate = new Date();
  const expiryDate = new Date(gameState.timestamp);
  // console.log(currentDate < expiryDate);
  // console.log(currentDate);
  // console.log(expiryDate);
  if (currentDate > expiryDate) {
    localStorage.clear();
  }

  //Constants
  //tt1877830 // tt0120737 //tt0086190 //  // tt1877830 tt0080684 //tt0245429
  const movieID: string = 'tt0245429';
  const movieURL: string = `${process.env.REACT_APP_IMDBAPI}${movieID}`;

  //Functions
  const submitAnswer = (guessObj: any, answer: string, field: number) => {
    const guessArray: string[] = objToArrConversion(guessObj, answer);
    const formattedArray: string[] = formatAnswerArr(answer);
    const answerArray: string[] = formattedArray.map((elm: string, index: number) => {
      if (elm === "|") {
        return elm = "";
      }
      return elm;
    })

    if (answerCheck(guessArray, answerArray)) {
      const copyArr = [...gameState.guessesArray];
      copyArr[field] = guessArray;
      setGameState((prev: any) => ({ ...prev, isCorrect: true, guessCount: gameState.guessCount + 1, guessesArray: copyArr }));
      const gameData: any = {
        user: ip,
        win: true,
        guessesArray: copyArr,
        guessCount: gameState.guessCount + 1,
        endDate: gameState.timestamp,
      }
      saveResult(gameData, movieState);
    } else if ((gameState.guessCount + 1) === 3) {
      const copyArr = [...gameState.guessesArray];
      copyArr[field] = guessArray;
      setGameState((prev: any) => ({ ...prev, guessCount: gameState.guessCount + 1, guessesArray: copyArr }));
      const gameData: any = {
        user: ip,
        win: false,
        guessesArray: copyArr,
        guessCount: gameState.guessCount + 1,
        endDate: gameState.timestamp,
      }
      saveResult(gameData, movieState);
    }
    else {
      const copyArr = [...gameState.guessesArray];
      copyArr[field] = guessArray;
      setGameState((prev: any) => ({ ...prev, guessCount: gameState.guessCount + 1, guessesArray: copyArr }));
    }
  };

  const answerCheck = (guessArray: string[], answerArray: string[]): boolean => {
    if (answerArray.length !== guessArray.length) {
      return false;
    }

    for (let i = 0; i < answerArray.length; i++) {
      if (answerArray[i] !== guessArray[i]) {
        return false;
      }
    }
    return true;
  };

  const gameOverCheck = (guessCount: number): boolean => {
    if (guessCount === 3) {
      setGameState((prev: any) => ({ ...prev, gameOver: true }));
      return true;
    }
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
    const answerLen: number = answer.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s+/g, "").toLowerCase().length;
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
      if (char !== " ") {
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
    const breakCount = Math.round((answer.length) / 2);

    words.forEach(function (word, i) {
      charCount += word.length + 1;
      if (charCount <= breakCount) {
        newStr += ' ';
      } else {
        newStr += lineBreak;
        charCount = word.length;
      }
      newStr += word;
    });

    return newStr.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s+/g, "").split("");
  };

  const saveResult = async (gameData: any, movieData: any) => {
    const data = {
      user: gameData.user,
      win: gameData.win,
      guesses: gameData.guessesArray,
      guessCount: gameData.guessCount,
      movieID: movieData.id,
      movieName: movieData.title,
      endDate: gameData.endDate,
    };

    try {
      const response = await axios.post(`https://filmdle-api.filmdle.ca/userresults`, data);
      // console.log(response);
    }
    catch (error) {
      console.error(error);
    }
  }

  const getIpAddress = async () => {
    const response = await axios.get('https://geolocation-db.com/json/');
    setIp(response.data.IPv4);
  }

  useEffect(() => {
    axios.get(movieURL)
      .then((res) => {
        const movie: any = res.data;
        setMovieState((prev: any) => (prev = movie));
        getIpAddress();
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      })
  }, []);

  useEffect(() => {
    localStorage.setItem("gameData", JSON.stringify(gameState));
  }, [gameState]);

  return {
    gameState,
    movieState,
    loading,
    submitAnswer,
    objToArrConversion,
    arrToObjConversion,
    gameOverCheck,
    focusField,
    formatAnswerArr,
    saveResult,
  };
};

export default useAppData;