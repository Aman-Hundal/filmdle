import { Stack, Button } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import StatsListItem from "./StatsListItem";
import { useState } from "react";
import ShowChartIcon from '@mui/icons-material/ShowChart';

const StatsMain = (): any => {
    const [open, setOpen]: any = useState(false);

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
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <h1>Stats</h1>
                        <ShowChartIcon sx={{ fontSize: "50px", color: "black" }} />
                    </Stack>
                </DialogTitle>
                <DialogContent>
                    <StatsListItem />
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default StatsMain;