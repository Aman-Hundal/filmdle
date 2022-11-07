
import { Stack, Typography } from "@mui/material";
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
            sx={{ width: "100%", height: "100%", padding: "3%" }}
        >
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
                sx={{ paddingBottom: "2%" }}
            >
                <CalendarMonthIcon sx={{ fontWeight: 300, fontSize: " clamp(0.8rem, 1.5vw, 1.5rem)", color: "black", paddingRight: "1%", wordWrap: "break-word" }} />
                {movieData.year ? <Typography sx={{ fontWeight: 300, fontSize: " clamp(0.8rem, 1.5vw, 1.5rem)" }}>Release Date: {movieData.year}</Typography> : <Typography>Release Date: N/A</Typography>}
            </Stack>

            <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
                sx={{ paddingBottom: "2%" }}
            >
                <TheatersIcon sx={{ fontWeight: 300, fontSize: " clamp(0.8rem, 1.5vw, 1.5rem)", color: "black", paddingRight: "1%", wordWrap: "break-word" }} />
                {movieData.runtimeStr ? <Typography sx={{ fontWeight: 300, fontSize: " clamp(0.8rem, 1.5vw, 1.5rem)" }}>Runtime: {movieData.runtimeStr}</Typography> : <Typography>Runtime: N/A</Typography>}
            </Stack>

            <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
                sx={{ paddingBottom: "2%" }}
            >
                <StarIcon sx={{ fontWeight: 300, fontSize: " clamp(0.8rem, 1.5vw, 1.5rem)", color: "black", paddingRight: "1%", wordWrap: "break-word" }} />
                {movieData.metacriticRating ? <Typography sx={{ fontWeight: 300, fontSize: " clamp(0.8rem, 1.5vw, 1.5rem)" }}>Metacritic Rating: {movieData.metacriticRating}/100</Typography> : <Typography>Metacritic Rating: N/A</Typography>}
            </Stack>

            <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
                sx={{ paddingBottom: "2%" }}
            >
                <ReviewsIcon sx={{ fontWeight: 300, fontSize: " clamp(0.8rem, 1.5vw, 1.5rem)", color: "black", paddingRight: "1%", wordWrap: "break-word" }} />
                {movieData.imDbRating ? <Typography sx={{ fontWeight: 300, fontSize: " clamp(0.8rem, 1.5vw, 1.5rem)" }}>IMDB Rating: {movieData.imDbRating}/10</Typography> : <Typography>IMDB Rating: N/A</Typography>}
            </Stack>


            <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
                sx={{ paddingBottom: "2%" }}
            >
                <EighteenUpRatingIcon sx={{ fontWeight: 300, fontSize: " clamp(0.8rem, 1.5vw, 1.5rem)", color: "black", paddingRight: "1%", wordWrap: "break-word" }} />
                {movieData.contentRating ? <Typography sx={{ fontWeight: 300, fontSize: " clamp(0.8rem, 1.5vw, 1.5rem)" }}>Content Rating: {movieData.contentRating}</Typography> : <Typography>Content Rating: N/A</Typography>}
            </Stack>

            <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
                sx={{ paddingBottom: "2%" }}
            >
                <TheaterComedyIcon sx={{ fontWeight: 300, fontSize: " clamp(0.8rem, 1.5vw, 1.5rem)", color: "black", paddingRight: "1%", wordWrap: "break-word" }} />
                {movieData.genres ? <Typography sx={{ fontWeight: 300, fontSize: " clamp(0.8rem, 1.5vw, 1.5rem)" }}>Genres: {movieData.genres}</Typography> : <Typography>Genres: N/A</Typography>}
            </Stack>

            <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
                sx={{ paddingBottom: "2%" }}
            >
                <EmojiEventsIcon sx={{ fontWeight: 300, fontSize: " clamp(0.8rem, 1.5vw, 1.5rem)", color: "black", paddingRight: "1%", wordWrap: "break-word" }} />
                {movieData.awards ? <Typography sx={{ fontWeight: 300, fontSize: " clamp(0.8rem, 1.5vw, 1.5rem)" }}>Accolades: IMDB {movieData.awards}</Typography> : <Typography>Accolades: N/A</Typography>}
            </Stack>

            <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
                sx={{ paddingBottom: "2%" }}
            >
                <MovieIcon sx={{ fontWeight: 300, fontSize: " clamp(0.8rem, 1.5vw, 1.5rem)", color: "black", paddingRight: "1%", wordWrap: "break-word" }} />
                <Typography sx={{ fontWeight: 300, fontSize: " clamp(0.8rem, 1.5vw, 1.5rem)" }}>Letters: {answerLetterCount}</Typography>
            </Stack>

        </Stack>
    );
}

export default MovieInfo;