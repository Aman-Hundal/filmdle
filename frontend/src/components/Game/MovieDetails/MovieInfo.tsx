
import { Stack, Typography, Grid } from "@mui/material";
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
        <Grid
            container
            alignItems="center"
            justifyContent="center"
            sx={{ width: "100%", height: "100%", padding: "2% 3% 2% 3%" }}
        >
            <Grid
                item xs={12} sm={12} md={12}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="flex-start"
                >
                    <CalendarMonthIcon sx={{ fontWeight: 300, fontSize: "clamp(0.8rem, 1.5vw, 1.6rem)", color: "black", paddingRight: "1%" }} />
                    {movieData.year ? <Typography sx={{ fontWeight: 300, fontSize: "clamp(0.8rem, 1.5vw, 1.6rem)" }}>Release Date: {movieData.year}</Typography> : <Typography>Release Date: N/A</Typography>}
                </Stack>
            </Grid>
            <Grid
                item xs={12} sm={12} md={12}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="flex-start"
                >
                    <TheatersIcon sx={{ fontWeight: 300, fontSize: "clamp(0.8rem, 1.5vw, 1.6rem)", color: "black", paddingRight: "1%" }} />
                    {movieData.runtimeStr ? <Typography sx={{ fontWeight: 300, fontSize: "clamp(0.8rem, 1.5vw, 1.6rem)" }}>Runtime: {movieData.runtimeStr}</Typography> : <Typography>Runtime: N/A</Typography>}
                </Stack>
            </Grid>
            <Grid
                item xs={12} sm={12} md={12}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="flex-start"
                >
                    <StarIcon sx={{ fontWeight: 300, fontSize: "clamp(0.8rem, 1.5vw, 1.6rem)", color: "black", paddingRight: "1%" }} />
                    {movieData.metacriticRating ? <Typography sx={{ fontWeight: 300, fontSize: "clamp(0.8rem, 1.5vw, 1.6rem)" }}>Metacritic Rating: {movieData.metacriticRating}/100</Typography> : <Typography>Metacritic Rating: N/A</Typography>}
                </Stack>
            </Grid>
            <Grid
                item xs={12} sm={12} md={12}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="flex-start"
                >
                    <ReviewsIcon sx={{ fontWeight: 300, fontSize: "clamp(0.8rem, 1.5vw, 1.6rem)", color: "black", paddingRight: "1%" }} />
                    {movieData.imDbRating ? <Typography sx={{ fontWeight: 300, fontSize: "clamp(0.8rem, 1.5vw, 1.6rem)" }}>IMDB Rating: {movieData.imDbRating}/10</Typography> : <Typography>IMDB Rating: N/A</Typography>}
                </Stack>
            </Grid>
            <Grid
                item xs={12} sm={12} md={12}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="flex-start"
                >
                    <EighteenUpRatingIcon sx={{ fontWeight: 300, fontSize: "clamp(0.8rem, 1.5vw, 1.6rem)", color: "black", paddingRight: "1%" }} />
                    {movieData.contentRating ? <Typography sx={{ fontWeight: 300, fontSize: "clamp(0.8rem, 1.5vw, 1.6rem)" }}>Content Rating: {movieData.contentRating}</Typography> : <Typography>Content Rating: N/A</Typography>}
                </Stack>
            </Grid>
            <Grid
                item xs={12} sm={12} md={12}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="flex-start"
                >
                    <TheaterComedyIcon sx={{ fontWeight: 300, fontSize: "clamp(0.8rem, 1.5vw, 1.6rem)", color: "black", paddingRight: "1%" }} />
                    {movieData.genres ? <Typography sx={{ fontWeight: 300, fontSize: "clamp(0.8rem, 1.5vw, 1.6rem)" }}>Genres: {movieData.genres}</Typography> : <Typography>Genres: N/A</Typography>}
                </Stack>
            </Grid>
            <Grid
                item xs={12} sm={12} md={12}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="flex-start"
                >
                    <EmojiEventsIcon sx={{ fontWeight: 300, fontSize: "clamp(0.8rem, 1.5vw, 1.6rem)", color: "black", paddingRight: "1%" }} />
                    {movieData.awards ? <Typography sx={{ fontWeight: 300, fontSize: "clamp(0.8rem, 1.5vw, 1.6rem)" }}>Accolades: IMDB {movieData.awards}</Typography> : <Typography>Accolades: N/A</Typography>}
                </Stack>
            </Grid>
            <Grid
                item xs={12} sm={12} md={12}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="flex-start"
                >
                    <MovieIcon sx={{ fontWeight: 300, fontSize: "clamp(0.8rem, 1.5vw, 1.6rem)", color: "black", paddingRight: "1%" }} />
                    <Typography sx={{ fontWeight: 300, fontSize: "clamp(0.8rem, 1.5vw, 1.6rem)" }}>Letters: {answerLetterCount}</Typography>
                </Stack>
            </Grid>
        </Grid>
    );
}

export default MovieInfo;