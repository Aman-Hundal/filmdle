import {useState, useEffect} from 'react';
import './App.css';
import GameIndex from './components/weeklyGame/GameIndex';
import axios from 'axios';

function App() {
  const [movie, setMovie] = useState({});
  const [correctAnswer, setCorrectAnswer] = useState(true);
  const [guessCount, setGuessCount] = useState(0);

  const movieID: string = 'tt0099685'
  const movieURL: string = `https://imdb-api.com/en/API/Title/k_m0tl1spq/${movieID}`;
  
  useEffect(() => {
    axios.get(movieURL)
    .then((res) => {
      setMovie((prev) => {return prev = res.data;});
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])

  console.log(movie);
  
  return (
    <div className="App">
      <h1>Moviedle</h1>
      <GameIndex movieData={movie} correctAnswer={correctAnswer} />
    </div>
  );
}

export default App;
