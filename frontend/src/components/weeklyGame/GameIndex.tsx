import MovieDetails from "./MovieDetails"
import PreviousGuess from "./PreviousGuess"
import UserGuess from "./UserGuess"

const GameIndex = (props: any) => {
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