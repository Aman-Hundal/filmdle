import './App.css';
import GameIndex from './components/weeklyGame/GameIndex';
import useAppData from './hooks/useAppData';

function App() {
  const {
    state,
    submitAnswer,
    ObjToArrConversion
  } = useAppData(); 

  // const mockMovieData: {name: string, image: string, releaseDate: string, runTime: string, rating: string, contentRating: string, genres: string, accolades: string} = {
  //   name: "Goodfellas",
  //   image: "https://static.independent.co.uk/2020/09/17/10/goodfellas-poster.jpg?quality=75&width=990&auto=webp&crop=982:726,smart",
  //   releaseDate: "1990",
  //   runTime: "2hr and 20mins",
  //   rating: "9.0",
  //   contentRating: "R",
  //   genres: "Thriller, Drama",
  //   accolades: "5 nominations, no wins"
  // };

  console.log(state.movie)
  console.log(state.answer)
  
  return (
    <div className="App">
      <h1>Moovdle</h1>
      <GameIndex
      ObjToArrConversion={ObjToArrConversion} 
      movieData={state.movie}
      submitAnswer={submitAnswer} 
      answer={state.answer} 
      isCorrectAnswer={state.isCorrectAnswer} 
      guessCounter={state.guessCount} />
    </div>
  );
}

export default App;
