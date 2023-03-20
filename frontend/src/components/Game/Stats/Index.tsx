import { useState } from "react";
import { Stack, Button, Divider } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import StatsLower from "./StatsLower";
import StatsUpper from "./StatsUpper";

const Stats = (props: any) => {
    const [open, setOpen]: any = useState(false);
    const { stats } = props;

    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => {
        setOpen(false)
    };

    return (
        <>
            <Button variant="outlined" onClick={handleOpen}>
                Stats
            </Button>
            <Dialog
                fullWidth
                maxWidth="sm"
                open={open}
                onClose={handleClose}
            >
                <DialogTitle sx={{ backgroundColor: "black", marginBottom: "30px" }}>
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <h1 style={{ color: "white", marginBottom: 0, marginTop: 0 }}>Stats</h1>
                        <ShowChartIcon sx={{ fontSize: "50px", color: "white", }} />
                    </Stack>
                </DialogTitle>
                <DialogContent>
                    <StatsUpper wins={stats.totalUserWins} currentStreak={stats.currentStreak} gamesPlayed={stats.totalUserGames} bestWinStreak={stats.bestStreak} />
                    <Divider sx={{ margin: "30px 0 30px 0" }} />
                    <StatsLower weeklyWins={stats.totalWeeklyWins} winGuess={stats.winGuess} />
                </DialogContent>
                <DialogActions>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default Stats;