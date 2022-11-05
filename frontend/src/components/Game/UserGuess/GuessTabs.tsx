import { Tabs, Tab, Stack } from '@mui/material';

const GuessTabs = (props: any) => {
    const { guess, setGuess } = props;

    const handleChange = (event: any, newValue: string) => {
        setGuess(newValue);
    };

    return (
        <Stack
            sx={{ width: '100%', padding: "1%" }}
            alignItems="center"
            justifyContent="center"
        >
            <Tabs
                value={guess}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
            >
                <Tab onClick={() => setGuess("ONE")} value="ONE" label="First Guess" />
                <Tab onClick={() => setGuess("TWO")} value="TWO" label="Second Guess" />
                <Tab onClick={() => setGuess("THREE")} value="THREE" label="Third Guess" />
            </Tabs>
        </Stack>
    );
}

export default GuessTabs;