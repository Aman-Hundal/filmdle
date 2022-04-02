import AvailableLetters from "./AvailableLetters";
import MovieDetails from "./MovieDetails";
import PreviousGuess from "./PreviousGuess";
import UserGuess from "./UserGuess";

const GameIndex = (props: any) => {
    const { movieData, isCorrectAnswer, mockData, answer } = props;
    return (
        <div>
            <MovieDetails movieData={movieData} isCorrectAnswer={isCorrectAnswer} />
            <UserGuess movieData={movieData} isCorrectAnswer={isCorrectAnswer} mockData={mockData} answer={answer} />
            {/* <UserGuess movieData={movieData} correctAnswer={correctAnswer} mockData={mockData} />
            <UserGuess movieData={movieData} correctAnswer={correctAnswer} mockData={mockData} /> */}
            {/* <PreviousGuess />
            <PreviousGuess /> */}
            {/* <AvailableLetters /> */}
        </div>
    )
};

export default GameIndex;