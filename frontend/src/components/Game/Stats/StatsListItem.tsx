import { Stack, Typography, Grid } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TheatersIcon from '@mui/icons-material/Theaters';
import StarIcon from '@mui/icons-material/Star';
import ReviewsIcon from '@mui/icons-material/Reviews';
import EighteenUpRatingIcon from '@mui/icons-material/EighteenUpRating';

const StatsListItem = (props: any) => {
    const { stats } = props;
    
    return (
        <Grid
            container
            alignItems="center"
            justifyContent="center"
            sx={{ width: "100%", height: "100%" }}
        >
            <Grid
                item xs={12} sm={12} md={12}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="flex-start"
                >
                    <EighteenUpRatingIcon sx={{ fontWeight: 300, fontSize: "clamp(0.8rem, 1.5vw, 1.6rem)", color: "black", paddingRight: "1%" }} />
                    <Typography sx={{ fontWeight: 300, fontSize: "clamp(0.8rem, 1.5vw, 1.6rem)" }}>Best Win Streak: {stats.bestStreak}</Typography>
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
                    <CalendarMonthIcon sx={{ fontWeight: 300, fontSize: "clamp(0.8rem, 1.5vw, 1.6rem)", color: "black", paddingRight: "1%" }} />
                    <Typography sx={{ fontWeight: 300, fontSize: "clamp(0.8rem, 1.5vw, 1.6rem)" }}>Current Win Streak: {stats.currentStreak}</Typography>
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
                    <Typography sx={{ fontWeight: 300, fontSize: "clamp(0.8rem, 1.5vw, 1.6rem)" }}>Total Wins: {stats.totalUserWins}</Typography>
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
                    <Typography sx={{ fontWeight: 300, fontSize: "clamp(0.8rem, 1.5vw, 1.6rem)" }}>Games Played: {stats.totalUserGames}</Typography>
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
                    <Typography sx={{ fontWeight: 300, fontSize: "clamp(0.8rem, 1.5vw, 1.6rem)" }}>Global Wins: {stats.totalWeeklyWins}</Typography>
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
                    <Typography sx={{ fontWeight: 300, fontSize: "clamp(0.8rem, 1.5vw, 1.6rem)" }}>First/Second/Third Guess: {stats.winGuess[0]}{stats.winGuess[1]}/{stats.winGuess[2]}</Typography>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default StatsListItem;