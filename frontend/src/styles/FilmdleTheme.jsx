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

    typography: {
        // fontFamily: ["Work Sans, sans-serif"],
        // h1: {
        //     color: palette.primary.main,
        //     fontWeight: "900",
        //     textSizeAdjust: "100%",
        // },
    },

    components: {
        fontFamily: ["Work Sans, sans-serif"],
    }
});

const FilmdleTheme = (props) => {
    return <ThemeProvider theme={filmdleTheme}>{props.children}</ThemeProvider>
}

export default FilmdleTheme;