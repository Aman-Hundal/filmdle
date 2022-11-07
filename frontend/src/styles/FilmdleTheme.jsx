import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey } from '@mui/material/colors';

const palette = {
    primary: {
        main: grey[900]
    },
    secondary: {
        main: "#ffffff"
    },
    body: {
        main: "#ffffff"
    },
    background: {
        main: "#ffffff"
    }
}

const filmdleTheme = createTheme({
    palette: palette,

    components: {
        fontFamily: ["Work Sans, sans-serif, Montserrat"]
    }
});

const FilmdleTheme = (props) => {
    return <ThemeProvider theme={filmdleTheme}>{props.children}</ThemeProvider>
}

export default FilmdleTheme;