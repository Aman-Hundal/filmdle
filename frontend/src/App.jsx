import './styles/App.css';
import GameIndex from './components/Game/Index';
import useAppData from './hooks/useAppData';
import NavBar from './components/Navigation/NavBar';
import Stats from './components/Game/Stats/Index';

function App() {
  const {
    gameState,
    stats,
    movieState,
    loading,
    submitAnswer,
    objToArrConversion,
    gameOverCheck,
    focusField,
    formatAnswerArr,
    saveResult,
    open,
    handleClose,
    handleOpen,
  } = useAppData();
  const cleanMovieTitle = !loading ? movieState.title.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") : "";

  return (
    <>
      {!loading ?
        <div className="App">
          <NavBar handleOpen={handleOpen} />
          {gameState.gameOver || gameState.isCorrect ? <p className="goodbye">The film was <strong>{cleanMovieTitle}</strong>. Please join again next week.</p> : <p className="goodbye"></p>}
          <GameIndex
            focusField={focusField}
            objToArrConversion={objToArrConversion}
            formatAnswerArr={formatAnswerArr}
            gameOverCheck={gameOverCheck}
            submitAnswer={submitAnswer}
            saveResult={saveResult}
            movieData={movieState}
            gameData={gameState} />
          <Stats stats={stats} handleClose={handleClose} open={open} />
        </div> : null}
    </>
  );
}

export default App;