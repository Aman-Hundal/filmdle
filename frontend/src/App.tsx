import {useState, useEffect} from 'react';
import './App.css';
import GameIndex from './components/weeklyGame/GameIndex';
import axios from 'axios';

function App() {
  const [movie, setMovie] = useState({})
  const movieURL: string = `https://imdb-api.com/en/API/Title/k_m0tl1spq/tt0120586`;
  
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
      <GameIndex movieData={movie} />
    </div>
  );
}

export default App;
