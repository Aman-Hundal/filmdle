import {
    Grid,
    Stack,
} from '@mui/material';
import { grey } from '@mui/material/colors';

const NavBar = (prop: any) => {

    return (
        <Grid
            container
            alignItems="center"
            justifyContent="center"
            sx={{
                width: "100%",
                padding: "0.5%",
                backgroundColor: grey[900],
                // borderBottom: "10px solid #ffffff"
            }}
        >
            <Grid item>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                >
                    <h1 style={{ color: "#ffffff" }} className="title">filmdle</h1>
                </Stack>
            </Grid>
        </Grid>
    );
}

export default NavBar;