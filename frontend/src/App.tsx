import './styles/App.css';
import GameIndex from './components/Game/Index';
import useAppData from './hooks/useAppData';
import NavBar from './components/Navigation/NavBar';

function App() {
  const {
    gameState,
    movieState,
    loading,
    submitAnswer,
    objToArrConversion,
    gameOverCheck,
    focusField,
    formatAnswerArr
  } = useAppData();

  console.log(gameState)

  return (
    <>
      {!loading ?
        <div className="App">
          <NavBar />
          {gameState.gameOver || gameState.isCorrect ? <p className="goodbye">The film was <strong>{movieState.title.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")}</strong>. Please join again next week.</p> : <p className="goodbye"></p>}
          <GameIndex
            focusField={focusField}
            isCorrect={gameState.isCorrect}
            objToArrConversion={objToArrConversion}
            formatAnswerArr={formatAnswerArr}
            gameOverCheck={gameOverCheck}
            guessCount={gameState.guessCount}
            movieData={movieState}
            guessesArray={gameState.guessesArray}
            submitAnswer={submitAnswer}
            answer={movieState.title}
            gameOver={gameState.gameOver}
            guessCounter={gameState.guessCount} />
        </div> : null}
    </>
  );
}

export default App;
