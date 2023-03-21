import {
    Grid,
    Stack,
    IconButton
} from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import MenuIcon from '@mui/icons-material/Menu';
import { grey } from '@mui/material/colors';

const NavBar = (props: any) => {
    const { handleOpenStats, handleOpenRules } = props;

    return (
        <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            sx={{
                width: "100%",
                backgroundColor: grey[900],
                // padding: "0.5%",
                // borderBottom: "10px solid #ffffff"
            }}
        >
            <Grid item>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                >
                    <MenuIcon sx={{ color: grey[900], fontSize: "35px", paddingLeft: "15px" }} />
                </Stack>
            </Grid>
            <Grid item>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                >
                    <h1 style={{ color: "#ffffff" }} className="title">filmdle</h1>
                </Stack>
            </Grid>
            <Grid item>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                >
                    <HelpOutlineIcon sx={{ color: "white", fontSize: "35px", paddingRight: "5px", cursor: "pointer" }} onClick={handleOpenRules} />
                    <LeaderboardIcon sx={{ color: "white", fontSize: "35px", paddingRight: "10px", cursor: "pointer" }} onClick={handleOpenStats} />
                </Stack>
            </Grid>
        </Grid>
    );
}

export default NavBar;