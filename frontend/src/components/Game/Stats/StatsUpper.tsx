import { Stack, Typography, Grid } from "@mui/material";

const StatsUpper = (props: any) => {
    const { wins, currentStreak, gamesPlayed, bestWinStreak } = props;

    return (
        <Grid
            container
            sx={{ width: "100%", height: "100%" }}
        >
            <Grid item xs={3}>
                <Stack
                    direction="column"
                    alignItems="center"
                >
                    <h2 style={{ marginBottom: 0, marginTop: 0 }}>{gamesPlayed}</h2>
                    <Typography sx={{ textAlign: "center" }}>Games Played</Typography>
                </Stack>
            </Grid>
            <Grid item xs={3}>
                <Stack
                    direction="column"
                    alignItems="center"
                >
                    <h2 style={{ marginBottom: 0, marginTop: 0 }}>{wins}</h2>
                    <Typography sx={{ textAlign: "center" }}>Wins</Typography>
                </Stack>
            </Grid>
            <Grid item xs={3}>
                <Stack
                    direction="column"
                    alignItems="center"
                >
                    <h2 style={{ marginBottom: 0, marginTop: 0 }}>{currentStreak}</h2>
                    <Typography sx={{ textAlign: "center" }}>Current Streak</Typography>
                </Stack>
            </Grid>
            <Grid item xs={3}>
                <Stack
                    direction="column"
                    alignItems="center"
                >
                    <h2 style={{ marginBottom: 0, marginTop: 0 }}>{bestWinStreak}</h2>
                    <Typography sx={{ textAlign: "center" }}>Best Streak</Typography>
                </Stack>
            </Grid>
        </Grid>
    );
}

export default StatsUpper;