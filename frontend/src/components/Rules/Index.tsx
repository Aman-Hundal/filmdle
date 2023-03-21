import { Stack, Divider, Typography } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { grey } from "@mui/material/colors";
import SegmentIcon from '@mui/icons-material/Segment';
import RulesContent from "./RulesContent";

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
                    <RulesContent />
                    <Divider sx={{ margin: "20px 0 20px 0" }} />
                    <Typography sx={{ textAlign: "center", fontSize: "10px" }}><strong>Created by Aman Hundal. Feel free to reach out here</strong></Typography>
                    <Typography sx={{ textAlign: "center", fontSize: "10px" }}>
                        <a style={{ textDecoration: "none" }} target="_blank" href="https://www.linkedin.com/in/aman-hundal-7692398a/"><strong>LinkedIn</strong></a>
                    </Typography>
                </DialogContent>

            </Dialog>
        </>
    );
}

export default Rules;