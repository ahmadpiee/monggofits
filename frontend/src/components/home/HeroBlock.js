import React from "react"
import { Grid, Typography, makeStyles } from "@material-ui/core"
import Lottie from "react-lottie"
import animationData from "@images/hero.json"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    marginBottom: "5rem",
    minHeight: "70vh",
    padding: "0 2rem",
  },
}))

const HeroBlock = () => {
  const classes = useStyles()

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  }

  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      classes={{ root: classes.mainContainer }}
    >
      <Grid item>
        <Grid container direction="column">
          <Typography variant="h1" align="center">
            <span style={{ color: "#cf2f2f" }}>Speak</span> Through Your Fashion
            <br />
            Wear Your <span style={{ color: "#cf2f2f" }}>Best Quality</span>
          </Typography>
        </Grid>
        <Grid item style={{ margin: "0.5rem 0" }}>
          <Typography variant="h5" align="center">
            Premium Fabric, Custom-Designed, Perfect Fits!
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Lottie options={defaultOptions} width="100%" />
      </Grid>
    </Grid>
  )
}

export default HeroBlock
