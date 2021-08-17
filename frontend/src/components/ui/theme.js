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
      fontSize: "2.6rem",
      fontFamily: "Lato",
      fontStyle: "italic",
      letterSpacing: "0.35px",
      fontWeight: 700,
      color: solidBlack,
      "@media (max-width:1280px)": {
        fontSize: "2.4rem",
      },
      "@media (max-width:960px)": {
        fontSize: "2.2rem",
      },
      "@media (max-width:640px)": {
        fontSize: "2rem",
      },
      "@media (max-width:480px)": {
        fontSize: "1.8rem",
      },
    },
    h2: {
      fontFamily: "Lato",
      fontSize: "2.2rem",
      letterSpacing: "0.35px",
      fontWeight: 600,
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
    h3: {
      fontFamily: "Lato",
      fontSize: "2rem",
      letterSpacing: "0.35px",
      fontWeight: 600,
      color: solidBlack,
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
    h4: {
      fontFamily: "Lato",
      fontStyle: "italic",
      letterSpacing: "0.35px",
      fontWeight: 600,
      fontSize: "1.8rem",
      color: solidBlack,
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
        fontSize: "1.1rem",
      },
    },
    h5: {
      fontFamily: "Lato",
      fontSize: "1.6rem",
      letterSpacing: "0.35px",
      fontWeight: 600,
      fontStyle: "italic",
      color: solidBlack,
      "@media (max-width:1280px)": {
        fontSize: "1.4rem",
      },
      "@media (max-width:960px)": {
        fontSize: "1.2rem",
      },
      "@media (max-width:640px)": {
        fontSize: "1rem",
      },
      "@media (max-width:480px)": {
        fontSize: "0.9rem",
      },
    },
    h6: {
      fontSize: "1.4rem",
      fontFamily: "Lato",
      letterSpacing: "0.35px",
      fontWeight: 600,
      color: solidBlack,
      "@media (max-width:1280px)": {
        fontSize: "1.3",
      },
      "@media (max-width:960px)": {
        fontSize: "1.2rem",
      },
      "@media (max-width:640px)": {
        fontSize: "1.1rem",
      },
    },
    body1: {
      fontFamily: "Lato",
      fontSize: "1rem",
      letterSpacing: "0.25px",
      color: solidBlack,
      "@media (max-width:1280px)": {
        fontSize: "0.95rem",
      },
      "@media (max-width:960px)": {
        fontSize: "0.9rem",
      },
      "@media (max-width:640px)": {
        fontSize: "0.85rem",
      },
      "@media (max-width:480px)": {
        fontSize: "0.8rem",
      },
    },
    body2: {
      fontFamily: "Lato",
      fontSize: "1rem",
      letterSpacing: "0.25px",
      color: white,
      "@media (max-width:1280px)": {
        fontSize: "0.95rem",
      },
      "@media (max-width:960px)": {
        fontSize: "0.9rem",
      },
      "@media (max-width:640px)": {
        fontSize: "0.85rem",
      },
      "@media (max-width:480px)": {
        fontSize: "0.8rem",
      },
    },
  },
  overrides: {},
})

export default theme
