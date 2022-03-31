import MovieDetails from "./MovieDetails"
import PreviousGuess from "./PreviousGuess"
import UserGuess from "./UserGuess"

const GameIndex = (props: any) => {
    const { movieData, correctAnswer } = props;
    return (
        <div>
            <MovieDetails movieData={movieData} correctAnswer={correctAnswer} />
            <UserGuess />
            <PreviousGuess />
            <PreviousGuess />
        </div>
    )
};

export default GameIndex;