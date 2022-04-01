import {useState, useEffect} from 'react';
import './App.css';
import GameIndex from './components/weeklyGame/GameIndex';
import axios from 'axios';

function App() {
  const [movie, setMovie] = useState({});
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [guessCount, setGuessCount] = useState(0);
  const [answer, setAnswer] = useState("");
  const [letters, setLetters] = useState([]);

  const mockMovieData: {name: string, image: string, releaseDate: string, runTime: string, rating: string, contentRating: string, genres: string, accolades: string} = {
    name: "Goodfellas",
    image: "https://static.independent.co.uk/2020/09/17/10/goodfellas-poster.jpg?quality=75&width=990&auto=webp&crop=982:726,smart",
    releaseDate: "1990",
    runTime: "2hr and 20mins",
    rating: "9.0",
    contentRating: "R",
    genres: "Thriller, Drama",
    accolades: "5 nominations, no wins"
  };

  const movieID: string = 'tt0099685';
  const movieURL: string = `https://imdb-api.com/en/API/Title/k_m0tl1spq/${movieID}`;
  
  useEffect(() => {
    axios.get(movieURL)
    .then((res) => {
      setMovie((prev) => {return prev = res.data;});
      setAnswer((prev) => {return prev = res.data.title;});
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])

  console.log(movie);
  
  return (
    <div className="App">
      <h1>Moovdle</h1>
      <GameIndex mockData={mockMovieData} movieData={movie} correctAnswer={correctAnswer} />
    </div>
  );
}

export default App;
