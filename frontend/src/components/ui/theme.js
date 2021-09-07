import { createTheme } from "@material-ui/core"

const primary = "#0e0e0e"
const secondary = "#3f3f3f"
const solidBlack = "#000"
const lightGray = "#d4d4d4"
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
      lightGray,
    },
  },
  typography: {
    h1: {
      fontSize: "2.6rem",
      fontFamily: "Roboto Mono",
      fontStyle: "italic",
      letterSpacing: "0.35px",
      fontWeight: 700,
      color: solidBlack,
      "@media (max-width:1280px)": {
        fontSize: "2.4rem",
      },
      "@media (max-width:960px)": {
        fontSize: "2.3rem",
      },
      "@media (max-width:640px)": {
        fontSize: "2.2rem",
      },
      "@media (max-width:480px)": {
        fontSize: "2.1rem",
      },
    },
    h2: {
      fontFamily: "Roboto Mono",
      fontSize: "2.2rem",
      letterSpacing: "0.35px",
      fontWeight: 600,
      color: solidBlack,
      "@media (max-width:1280px)": {
        fontSize: "2.1rem",
      },
      "@media (max-width:960px)": {
        fontSize: "2rem",
      },
      "@media (max-width:640px)": {
        fontSize: "1.9rem",
      },
      "@media (max-width:480px)": {
        fontSize: "1.8rem",
      },
    },
    h3: {
      fontFamily: "Roboto Mono",
      fontSize: "2rem",
      letterSpacing: "0.35px",
      fontWeight: 600,
      color: solidBlack,
      "@media (max-width:1280px)": {
        fontSize: "1.9rem",
      },
      "@media (max-width:960px)": {
        fontSize: "1.8rem",
      },
      "@media (max-width:640px)": {
        fontSize: "1.7rem",
      },
      "@media (max-width:480px)": {
        fontSize: "1.6rem",
      },
    },
    h4: {
      fontFamily: "Roboto Mono",
      fontStyle: "italic",
      letterSpacing: "0.35px",
      fontWeight: 600,
      fontSize: "1.8rem",
      color: solidBlack,
      "@media (max-width:1280px)": {
        fontSize: "1.7rem",
      },
      "@media (max-width:960px)": {
        fontSize: "1.6rem",
      },
      "@media (max-width:640px)": {
        fontSize: "1.5rem",
      },
      "@media (max-width:480px)": {
        fontSize: "1.4rem",
      },
    },
    h5: {
      fontFamily: "Roboto Mono",
      fontSize: "1.6rem",
      letterSpacing: "0.35px",
      fontWeight: 600,
      fontStyle: "italic",
      color: solidBlack,
      "@media (max-width:1280px)": {
        fontSize: "1.5rem",
      },
      "@media (max-width:960px)": {
        fontSize: "1.4rem",
      },
      "@media (max-width:640px)": {
        fontSize: "1.3rem",
      },
      "@media (max-width:480px)": {
        fontSize: "1.2rem",
      },
    },
    h6: {
      fontSize: "1.4rem",
      fontFamily: "Roboto Mono",
      letterSpacing: "0.35px",
      fontWeight: 600,
      color: solidBlack,
      "@media (max-width:1280px)": {
        fontSize: "1.3rem",
      },
      "@media (max-width:960px)": {
        fontSize: "1.2rem",
      },
      "@media (max-width:640px)": {
        fontSize: "1.1rem",
      },
    },
    body1: {
      fontFamily: "Roboto Slab",
      fontSize: "1.1rem",
      letterSpacing: "0.25px",
      color: solidBlack,
      "@media (max-width:1280px)": {
        fontSize: "1.05rem",
      },
      "@media (max-width:960px)": {
        fontSize: "1rem",
      },
      "@media (max-width:640px)": {
        fontSize: "0.95rem",
      },
      "@media (max-width:480px)": {
        fontSize: "0.9rem",
      },
    },
    body2: {
      fontFamily: "Roboto Slab",
      fontSize: "1.1rem",
      letterSpacing: "0.25px",
      color: white,
      "@media (max-width:1280px)": {
        fontSize: "1.05rem",
      },
      "@media (max-width:960px)": {
        fontSize: "1rem",
      },
      "@media (max-width:640px)": {
        fontSize: "0.95rem",
      },
      "@media (max-width:480px)": {
        fontSize: "0.9rem",
      },
    },
  },
  overrides: {
    MuiChip: {
      root: {
        background: white,
      },
      label: {
        fontFamily: "Roboto Mono",
        fontWeight: 700,
        fontSize: "1.1rem",
        letterSpacing: "0.25px",
        color: solidBlack,
        "@media (max-width:1280px)": {
          fontSize: "1.05rem",
        },
        "@media (max-width:960px)": {
          fontSize: "1rem",
        },
        "@media (max-width:640px)": {
          fontSize: "0.95rem",
        },
        "@media (max-width:480px)": {
          fontSize: "0.9rem",
        },
      },
    },
  },
})

export default theme
