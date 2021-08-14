import { createTheme } from "@material-ui/core"

const primary = "#050505"
const secondary = "#3f3f3f"
const solidBlack = "#000"
const white = "#ffffff"
const red1 = "#cf2f2f"
const red2 = "#881c1c"
const yellow1 = "#f7f024"
const blue1 = "#4b95f7"

const theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    common: {
      yellow1,
      blue1,
      red1,
      red2,
      white,
      solidBlack,
    },
  },
  typography: {
    h1: {
      fontSize: "2.8rem",
      fontFamily: "Raleway",
      fontStyle: "italic",
      fontWeight: 700,
      color: solidBlack,
      "@media (max-width:1280px)": {
        fontSize: "2.6rem",
      },
      "@media (max-width:960px)": {
        fontSize: "2.4rem",
      },
      "@media (max-width:640px)": {
        fontSize: "2.2rem",
      },
      "@media (max-width:480px)": {
        fontSize: "2rem",
      },
    },
    h2: {
      fontFamily: "Raleway",
      fontSize: "2.4rem",
      fontWeight: 500,
      color: white,
      "@media (max-width:1280px)": {
        fontSize: "2.2rem",
      },
      "@media (max-width:960px)": {
        fontSize: "2rem",
      },
      "@media (max-width:640px)": {
        fontSize: "1.8rem",
      },
      "@media (max-width:480px)": {
        fontSize: "1.6rem",
      },
    },
    h3: {
      fontFamily: "Raleway",
      fontSize: "2.2rem",
      fontWeight: 300,
      color: solidBlack,
      "@media (max-width:1280px)": {
        fontSize: "2rem",
      },
      "@media (max-width:960px)": {
        fontSize: "1.8rem",
      },
      "@media (max-width:640px)": {
        fontSize: "1.6rem",
      },
      "@media (max-width:480px)": {
        fontSize: "1.4rem",
      },
    },
    h4: {
      fontFamily: "Raleway",
      fontStyle: "italic",
      fontWeight: 700,
      fontSize: "2rem",
      color: white,
      "@media (max-width:1280px)": {
        fontSize: "1.8rem",
      },
      "@media (max-width:960px)": {
        fontSize: "1.6rem",
      },
      "@media (max-width:640px)": {
        fontSize: "1.4rem",
      },
      "@media (max-width:480px)": {
        fontSize: "1.2rem",
      },
    },
    h5: {
      fontFamily: "Raleway",
      fontSize: "1.8rem",
      fontWeight: 700,
      fontStyle: "italic",
      color: white,
      "@media (max-width:1280px)": {
        fontSize: "1.6rem",
      },
      "@media (max-width:960px)": {
        fontSize: "1.4rem",
      },
      "@media (max-width:640px)": {
        fontSize: "1.2rem",
      },
      "@media (max-width:480px)": {
        fontSize: "1rem",
      },
    },
    h6: {
      fontSize: "1.5rem",
      fontFamily: "Raleway",
      fontStyle: "italic",
      fontWeight: 700,
      color: solidBlack,
      "@media (max-width:1280px)": {
        fontSize: "1.4",
      },
      "@media (max-width:960px)": {
        fontSize: "1.3rem",
      },
      "@media (max-width:640px)": {
        fontSize: "1.2rem",
      },
    },
    body1: {
      fontFamily: "Montserrat",
      fontSize: "0.95rem",
      color: solidBlack,
      "@media (max-width:1280px)": {
        fontSize: "0.9rem",
      },
      "@media (max-width:960px)": {
        fontSize: "0.85rem",
      },
      "@media (max-width:640px)": {
        fontSize: "0.8rem",
      },
      "@media (max-width:480px)": {
        fontSize: "0.75rem",
      },
    },
    body2: {
      fontFamily: "Montserrat",
      fontSize: "0.95rem",
      color: white,
      "@media (max-width:1280px)": {
        fontSize: "0.9rem",
      },
      "@media (max-width:960px)": {
        fontSize: "0.85rem",
      },
      "@media (max-width:640px)": {
        fontSize: "0.8rem",
      },
      "@media (max-width:480px)": {
        fontSize: "0.75rem",
      },
    },
  },
  overrides: {
    "@global": {
      letterSpacing: "0",
    },
  },
})

export default theme
