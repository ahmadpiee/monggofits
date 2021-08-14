import React from "react"
import { Grid, Typography } from "@material-ui/core"
import Lottie from "react-lottie"

import animationData from "../../images/hero.json"

const HeroBlock = () => {
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
      style={{ marginBottom: "4rem" }}
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
          <Typography variant="h3" align="center">
            Premium Fabric, Custom-Designed, Perfect Fits!
          </Typography>
        </Grid>
      </Grid>

      <Grid item>
        <div style={{ maxWidth: "45rem" }}>
          <Lottie options={defaultOptions} width="100%" />
        </div>
      </Grid>
    </Grid>
  )
}

export default HeroBlock
