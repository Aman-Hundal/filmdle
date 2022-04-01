import AvailableLetters from "./AvailableLetters";
import MovieDetails from "./MovieDetails";
import PreviousGuess from "./PreviousGuess";
import UserGuess from "./UserGuess";

const GameIndex = (props: any) => {
    const { movieData, correctAnswer, mockData } = props;
    return (
        <div>
            <MovieDetails movieData={movieData} correctAnswer={correctAnswer} />
            <UserGuess movieData={movieData} correctAnswer={correctAnswer} mockData={mockData} />
            <UserGuess movieData={movieData} correctAnswer={correctAnswer} mockData={mockData} />
            <UserGuess movieData={movieData} correctAnswer={correctAnswer} mockData={mockData} />
            {/* <PreviousGuess />
            <PreviousGuess /> */}
            {/* <AvailableLetters /> */}
        </div>
    )
};

export default GameIndex;