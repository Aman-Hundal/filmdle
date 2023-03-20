import { Stack, Typography, Grid } from "@mui/material";

const StatsLower = (props: any) => {
    const { winGuess, weeklyWins } = props;

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 style={{ textAlign: "center", marginTop: 0 }}>Weekly Wins: {weeklyWins}</h1>
            <h4 style={{ textAlign: "center" }}>Guess Distribution</h4>
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                sx={{ width: "100%", height: "100%" }}
            >
                <Grid item xs={4}>
                    <Stack
                        direction="column"
                        alignItems="center"
                    >
                        <h4 style={{ marginBottom: 0, marginTop: 0 }}>{winGuess[0] / weeklyWins * 100}%</h4>
                        <Typography sx={{ textAlign: "center" }}>First Guess</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Stack
                        direction="column"
                        alignItems="center"
                    >
                        <h4 style={{ marginBottom: 0, marginTop: 0, }}>{winGuess[1] / weeklyWins * 100}%</h4>
                        <Typography sx={{ textAlign: "center" }}>Second Guess</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Stack
                        direction="column"
                        alignItems="center"
                    >
                        <h4 style={{ marginBottom: 0, marginTop: 0 }}>{winGuess[2] / weeklyWins * 100}%</h4>
                        <Typography sx={{ textAlign: "center" }}>Third Guess</Typography>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    );
}

export default StatsLower;