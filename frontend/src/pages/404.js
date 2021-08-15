import * as React from "react"

import Layout from "../components/ui/Layout"
import { makeStyles, Typography, Grid } from "@material-ui/core"
import Lottie from "react-lottie"
import animationData from "../images/404.json"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    minHeight: "50vh",
    padding: "4rem",
    textAlign: "center",
  },
}))

const NotFoundPage = () => {
  const classes = useStyles()
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  }
  return (
    <Layout>
      <Grid
        container
        alignItems="center"
        direction="column"
        classes={{ root: classes.mainContainer }}
      >
        <Lottie options={defaultOptions} width="50%" />
        <Typography variant="h5" style={{ color: "black" }}>
          Page Not Found
        </Typography>
      </Grid>
    </Layout>
  )
}

export default NotFoundPage
