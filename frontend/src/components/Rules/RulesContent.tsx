import { Grid, Typography } from "@mui/material";
const RulesContent = (props: any) => {
    return (
        <Grid
            container
            direction="column"
        >
            <Grid item xs={3}>
                <Typography>1. Guess the weekly movie by entering your answer in the input boxes provided. Use <strong>ENTER</strong> to submit you answer.</Typography>
            </Grid>
            <br></br>
            <Grid item xs={3}>
                <Typography>2. Based on your guess, the input boxes will turn a specific color...</Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography sx={{ marginLeft: "15px" }}><strong style={{ backgroundColor: "black", color: "white", borderColor: "lightgray", border: "solid 0.5px" }}>BLACK</strong> (and jump!) means the letter is in the correct position</Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography sx={{ marginLeft: "15px" }}><strong style={{ backgroundColor: "grey", color: "white", borderColor: "lightgray", border: "solid 0.5px" }}>GREY</strong> (and shake) means the letter is in the movie but in the incorrect position</Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography sx={{ marginLeft: "15px" }}><strong style={{ backgroundColor: "white", color: "black", borderColor: "lightgray", border: "solid 0.5px" }}>WHITE</strong> (and shake) means the letter is not in the movie</Typography>
            </Grid>
            <br></br>
            <Grid item xs={3}>
                <Typography>3. Use the Movie Details and the color of the input boxes to make your way towards the answer!</Typography>
            </Grid>
        </Grid >
    );
}

export default RulesContent;