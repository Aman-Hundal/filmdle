import { Stack, Divider } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { grey } from "@mui/material/colors";
import SegmentIcon from '@mui/icons-material/Segment';

const Rules = (props: any) => {
    const { handleClose, open } = props;

    return (
        <>
            <Dialog
                fullWidth
                maxWidth="sm"
                open={open}
                onClose={handleClose}
            >
                <DialogTitle sx={{ backgroundColor: grey[900], marginBottom: "30px" }}>
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <h1 style={{ color: "white", marginBottom: 0, marginTop: 0 }}>Rules</h1>
                        <SegmentIcon sx={{ fontSize: "50px", color: "white" }} />
                    </Stack>
                </DialogTitle>
                <DialogContent>
                    <Divider sx={{ margin: "30px 0 30px 0" }} />
                </DialogContent>
                <DialogActions>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default Rules;