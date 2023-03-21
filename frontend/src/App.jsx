import './styles/App.css';
import GameIndex from './components/Game/Index';
import useAppData from './hooks/useAppData';
import NavBar from './components/Navigation/NavBar';
import Stats from './components/Stats/Index';
import Rules from './components/Rules/Index';

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
    openStats,
    handleCloseStats,
    handleOpenStats,
    openRules,
    handleOpenRules,
    handleCloseRules,
  } = useAppData();
  const cleanMovieTitle = !loading ? movieState.title.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") : "";

  return (
    <>
      {!loading ?
        <div className="App">
          <NavBar handleOpenStats={handleOpenStats} handleOpenRules={handleOpenRules} />
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
          <Stats stats={stats} handleClose={handleCloseStats} open={openStats} />
          <Rules handleClose={handleCloseRules} open={openRules} />
        </div> : null}
    </>
  );
}

export default App;