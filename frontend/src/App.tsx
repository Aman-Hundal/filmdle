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
    formatAnswerArr,
    saveResult,
  } = useAppData();

  // console.log(gameState);

  return (
    <>
      {!loading ?
        <div className="App">
          <NavBar />
          {gameState.gameOver || gameState.isCorrect ? <p className="goodbye">The film was <strong>{movieState.title.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")}</strong>. Please join again next week.</p> : <p className="goodbye"></p>}
          <GameIndex
            focusField={focusField}
            objToArrConversion={objToArrConversion}
            formatAnswerArr={formatAnswerArr}
            gameOverCheck={gameOverCheck}
            submitAnswer={submitAnswer}
            saveResult={saveResult}
            movieData={movieState}
            gameData={gameState} />
        </div> : null}
    </>
  );
}

export default App;
