import MovieDetails from "./MovieDetails"
import PreviousGuess from "./PreviousGuess"
import UserGuess from "./UserGuess"

const GameIndex = (props: {}) => {
    return (
        <div>
            <MovieDetails />
            <UserGuess />
            <PreviousGuess />
            <PreviousGuess />
        </div>
    )
};

export default GameIndex;