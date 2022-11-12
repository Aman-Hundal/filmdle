import { Tabs, Tab, Stack } from '@mui/material';

const GuessTabs = (props: any) => {
    const { guess, setGuess, isCorrect, gameOver } = props;

    //Handle and control tab selection
    const handleChange = (event: any, newValue: string) => {
        setGuess(newValue);
    };

    return (
        <Stack
            sx={{ width: '100%', paddingTop: "0.5%", paddingBottom: "1%" }}
            alignItems="center"
            justifyContent="center"
        >
            <Tabs
                value={guess}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
            >
                <Tab disabled={isCorrect || gameOver} onClick={() => setGuess("ONE")} value="ONE" label="First Guess" />
                <Tab disabled={isCorrect || gameOver} onClick={() => setGuess("TWO")} value="TWO" label="Second Guess" />
                <Tab disabled={isCorrect || gameOver} onClick={() => setGuess("THREE")} value="THREE" label="Third Guess" />
            </Tabs>
        </Stack>
    );
}

export default GuessTabs;