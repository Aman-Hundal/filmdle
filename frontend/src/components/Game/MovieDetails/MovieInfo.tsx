
import { Stack } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MovieIcon from '@mui/icons-material/Movie';
import TheatersIcon from '@mui/icons-material/Theaters';
import StarIcon from '@mui/icons-material/Star';
import ReviewsIcon from '@mui/icons-material/Reviews';
import EighteenUpRatingIcon from '@mui/icons-material/EighteenUpRating';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';

const MovieInfo = (props: any) => {
    const { movieData, answer } = props;

    //Cosntants
    const answerLetterCount: number = answer.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s+/g, "").toLowerCase().length;

    return (
        <Stack
            sx={{ width: "100%", height: "100%", }}
        >
            <ul style={{ listStyle: "none", textAlign: "left" }}>
                <br />
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
        </Stack>
    );
}

export default MovieInfo;