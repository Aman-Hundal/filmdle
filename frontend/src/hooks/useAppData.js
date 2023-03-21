import { useState, useEffect } from "react";
import axios from 'axios';

const useAppData = function () {
  //Set expiry date of data in localstorage to Monday (Midnight)
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + ((6 - expiry.getDay()) % 7 + 1) % 7);
  expiry.setHours(24, 0, 0, 0);

  //Global State
  const [gameState, setGameState] = useState(
    localStorage.getItem("gameData") ? JSON.parse(localStorage.getItem("gameData") || "{}") :
      {
        isCorrect: false,
        guessCount: 0,
        gameOver: false,
        guessesArray: [],
        timestamp: expiry,
      }
  );
  const [stats, setStats] = useState({
    totalUserWins: 0,
    totalUserGames: 0,
    currentStreak: 0,
    bestStreak: 0,
    totalWeeklyWins: 0,
    winGuess: [],
  });
  const [movieState, setMovieState] = useState({});
  const [ip, setIp] = useState("");
  const [loading, setLoading] = useState(true);
  //Stats Component State Mgmt
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true)
  };
  const handleClose = () => {
    setOpen(false)
  };

  //Clear local storage if date > expiry date
  const currentDate = new Date();
  const expiryDate = new Date(gameState.timestamp);
  // console.log(currentDate < expiryDate);
  // console.log(currentDate);
  // console.log(expiryDate);
  if (currentDate > expiryDate) {
    localStorage.clear();
    // window.location.reload();
  }

  //Constants
  //tt1877830
  //tt2527338
  //tt0120737
  //tt0245429
  const movieID = 'tt0245429';
  const movieURL = `${process.env.REACT_APP_IMDBAPI}${movieID}`;

  //Functions
  //Submit Answer
  const submitAnswer = async (guessObj, answer, field) => {
    const guessArray = objToArrConversion(guessObj, answer);
    const formattedArray = formatAnswerArr(answer);
    const answerArray = formattedArray.map((elm, index) => {
      if (elm === "|") {
        return elm = "";
      }
      return elm;
    })
    if (answerCheck(guessArray, answerArray)) {
      const copyArr = [...gameState.guessesArray];
      copyArr[field] = guessArray;
      setGameState((prev) => ({ ...prev, isCorrect: true, guessCount: gameState.guessCount + 1, guessesArray: copyArr }));
      const gameData = {
        user: ip,
        win: true,
        guessesArray: copyArr,
        guessCount: gameState.guessCount + 1,
        endDate: gameState.timestamp,
      }
      await saveResult(gameData, movieState);

      //Retrieve updated user data and update state
      const newStats = await getUserData(ip, gameState.timestamp);
      setStats((prev) => ({
        ...prev,
        totalUserWins: newStats.totalUserWins,
        totalUserGames: newStats.totalUserGames,
        currentStreak: newStats.currentStreak,
        bestStreak: newStats.bestStreak,
        totalWeeklyWins: newStats.totalWeeklyWins,
        winGuess: newStats.winGuess,
      }))
      // setOpen(true);
    } else if ((gameState.guessCount + 1) === 3) {
      const copyArr = [...gameState.guessesArray];
      copyArr[field] = guessArray;
      setGameState((prev) => ({ ...prev, guessCount: gameState.guessCount + 1, guessesArray: copyArr }));
      const gameData = {
        user: ip,
        win: false,
        guessesArray: copyArr,
        guessCount: gameState.guessCount + 1,
        endDate: gameState.timestamp,
      }
      await saveResult(gameData, movieState);

      //Retrieve updated user data and update state
      const newStats = await getUserData(ip, gameState.timestamp);
      setStats((prev) => ({
        ...prev,
        totalUserWins: newStats.totalUserWins,
        totalUserGames: newStats.totalUserGames,
        currentStreak: newStats.currentStreak,
        bestStreak: newStats.bestStreak,
        totalWeeklyWins: newStats.totalWeeklyWins,
        winGuess: newStats.winGuess,
      }))
    }
    else {
      const copyArr = [...gameState.guessesArray];
      copyArr[field] = guessArray;
      setGameState((prev) => ({ ...prev, guessCount: gameState.guessCount + 1, guessesArray: copyArr }));
    }
  };
  //Function to confirm if the user's guess matches the movie title (answer)
  const answerCheck = (guessArray, answerArray) => {
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
  //Function to check if game is over (when user has used all of their guesses)
  const gameOverCheck = (guessCount) => {
    if (guessCount === 3) {
      setGameState((prev) => ({ ...prev, gameOver: true }));
      // setOpen(true);
      return true;
    }
    return false;
  };
  //Function used to control the User Guess input boxs UI (ie. to automatically go to the next input box on each keystroke/input from user and to not move to inputs box if delete or backspace keys used)
  const focusField = (event) => {
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
  //Function to convert an answer object to an answer array in format required for user guess input logic and UI/UX
  const objToArrConversion = (obj, answer) => {
    const answerLen = answer.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s+/g, "").toLowerCase().length;
    const resultArr = new Array(answerLen).fill("");
    for (let key in obj) {
      if (key !== "newKey") {
        resultArr[parseInt(key)] = obj[key].toLowerCase();
      }
    }
    return resultArr;
  };
  //Function to convert an answer array to answer object in format required for user guess input logic and UI/UX
  const arrToObjConversion = (arr) => {
    const resultObj = {};
    arr.forEach((char, index) => {
      if (char !== " ") {
        resultObj[index] = char;
      }
    })
    return resultObj;
  };
  //Function used to create a formatted answer array that will be used in the user guess input UI/UX
  //This formatted answer array allows for flexibility for the programmer in breaking up the movie title words in the user guess input UI/UX
  const formatAnswerArr = (answer) => {
    const lineBreak = '|';
    const words = answer.toLowerCase().split(" ");
    let newStr = words.shift()
    let charCount = newStr.length;
    const breakCount = Math.round((answer.length) / 2);
    words.forEach(function (word) {
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
  //Function to send axios request to back end API to save user result data
  const saveResult = async (gameData, movieData) => {
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
      const response = await axios.post("https://filmdle-api.filmdle.ca/userresults", data);
    }
    catch (error) {
      console.error(error);
    }
  }
  //Function to make request to a third party API to get the users IP Address
  const getIpAddress = async () => {
    try {
      const response = await axios.get('https://geolocation-db.com/json/');
      return response.data.IPv4;
    }
    catch (error) {
      console.error(error);
    }
  }
  //Function to gather user data from filmdle API
  const getUserData = async (ip, currentExpiry) => {
    const data = {
      user: ip,
      currentExpiry: currentExpiry,
    };
    try {
      const response = await axios.get("http://localhost:8080/userresults", { params: data });
      return response.data;
    }
    catch (error) {
      console.error(error);
    }
  }

  //useEffect to load app data (API calls to IMDB API, IP Address API, back end API etc.)
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(movieURL);
        const movie = res.data;
        setMovieState((prev) => (prev = movie));
        const ip = await getIpAddress()
        setIp(ip);

        const apiRes = await getUserData(ip, gameState.timestamp);
        const statsData = apiRes;
        setStats((prev) => ({
          ...prev,
          totalUserWins: statsData.totalUserWins,
          totalUserGames: statsData.totalUserGames,
          currentStreak: statsData.currentStreak,
          bestStreak: statsData.bestStreak,
          totalWeeklyWins: statsData.totalWeeklyWins,
          winGuess: statsData.winGuess,
        }))
        setLoading(false);
      }
      catch (err) {
        console.error(err);
      }
    }
    getData();
  }, []);
  //useEffect to set local storage when any changes to gameState occurs
  useEffect(() => {
    localStorage.setItem("gameData", JSON.stringify(gameState));
  }, [gameState]);

  return {
    gameState,
    stats,
    movieState,
    loading,
    submitAnswer,
    objToArrConversion,
    arrToObjConversion,
    gameOverCheck,
    focusField,
    formatAnswerArr,
    saveResult,
    open,
    handleClose,
    handleOpen,
  };
};

export default useAppData;