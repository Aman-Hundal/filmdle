import { CircularProgress, Stack } from '@mui/material';

const Loading = (props: any) => {
    return (
        <Stack
            display="column"
            justifyContent="center"
            alignItems="center"
            sx={{ textAlign: "center", minHeight: "90vh" }}
        >
            <h2>Loading</h2>
            <CircularProgress />
        </Stack >
    );
}

export default Loading;