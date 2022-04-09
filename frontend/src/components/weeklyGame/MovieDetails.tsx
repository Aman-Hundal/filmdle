import '../styles/MovieDetails.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MovieDetails = (props: any) => {
  const {movieData, gameOver, isCorrect, answer} = props;
  const movieImage: string = movieData.image;
  const answerLetterCount = answer.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s+/g, "").toLowerCase().length
  
  return (
    <div className="movie-header">
      {gameOver || isCorrect ? <img alt="movie-poster"className="movie-image" src={movieImage}></img> : <div className="unknown"><p className="unknown-text">?</p></div>}
      <div className="movie-details">
        <ul className="details-list">
          <br/>
          {movieData.year ? <li>Release Date: {movieData.year}</li> : <li>Release Date: N/A</li>}
          <br />
          {movieData.runtimeStr ? <li>Runtime: {movieData.runtimeStr}</li> : <li>Runtime: N/A</li>}
          <br />
          {movieData.metacriticRating ? <li>Metacritic Rating: {movieData.metacriticRating}/100</li> : <li>Metacritic Rating: N/A</li>}
          <br />
          {movieData.imDbRating ? <li>IMDB Rating: {movieData.imDbRating}/10</li> : <li>IMDB Rating: N/A</li>}
          <br />
          {movieData.contentRating ? <li>Content Rating: {movieData.contentRating}</li> : <li>Content Rating: N/A</li>}
          <br />
          {movieData.genres ? <li>Genres: {movieData.genres}</li> : <li>Genres: N/A</li>}
          <br />
          {movieData.awards ? <li>Accolades: IMDB {movieData.awards}</li> : <li>Accolades: N/A</li>}
          <br />
          <li>Letters: {answerLetterCount}</li>
          <br />
        </ul>
      </div> 
    </div>
  )
};

export default MovieDetails;