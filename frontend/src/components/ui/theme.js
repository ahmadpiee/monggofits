import { createTheme } from "@material-ui/core"

const primary = "#1f1f1f"
const solidBlack = "#000"
const red1 = "#cf2f2f"
const yellow1 = "#EDE734"
const blue1 = "#277dee"

const theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: solidBlack,
    },
    common: {
      yellow1,
      blue1,
      red1,
    },
  },
  typography: {
    h1: {
      fontSize: "2.8rem",
      fontFamily: "Raleway",
      fontStyle: "italic",
      fontWeight: 700,
      color: primary,
    },
    h2: {
      fontFamily: "Montserrat",
      fontSize: "2.2rem",
      fontWeight: 500,
      color: "#fff",
    },
    h3: {
      fontFamily: "Montserrat",
      fontSize: "1.2rem",
      fontWeight: 300,
      color: primary,
    },
    h4: {
      fontFamily: "Raleway",
      fontStyle: "italic",
      fontWeight: 700,
      fontSize: "2.2rem",
      color: "#fff",
    },
    h5: {
      fontFamily: "Raleway",
      fontSize: "1.2rem",
      fontWeight: 700,
      fontStyle: "italic",
      color: "#fff",
    },
    body1: {
      fontFamily: "Montserrat",
      fontSize: "1rem",
      color: primary,
    },
  },
  overrides: {},
})

export default theme
