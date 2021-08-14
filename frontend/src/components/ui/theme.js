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
    },
    h2: {
      fontFamily: "Montserrat",
      fontSize: "2.2rem",
      fontWeight: 500,
      color: white,
    },
    h3: {
      fontFamily: "Montserrat",
      fontSize: "1.2rem",
      fontWeight: 300,
      color: solidBlack,
    },
    h4: {
      fontFamily: "Raleway",
      fontStyle: "italic",
      fontWeight: 700,
      fontSize: "2.2rem",
      color: white,
    },
    h5: {
      fontFamily: "Raleway",
      fontSize: "1.3rem",
      fontWeight: 700,
      fontStyle: "italic",
      color: white,
    },
    h6: {
      fontSize: "1.5rem",
      fontFamily: "Raleway",
      fontStyle: "italic",
      fontWeight: 700,
      color: solidBlack,
    },
    body1: {
      fontFamily: "Montserrat",
      fontSize: "1rem",
      color: solidBlack,
    },
    body2: {
      fontFamily: "Montserrat",
      fontSize: "1rem",
      color: white,
    },
  },
  overrides: {},
})

export default theme
