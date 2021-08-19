import React from "react"
import {
  Grid,
  Typography,
  Button,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core"
import { Link } from "gatsby"
import { RightArrowIcon } from "@components/Icons"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    background: theme.palette.common.yellow1,
    minHeight: "20vh",
    padding: "2.5rem",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: "4rem",
  },
  buttonContainer: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "2.5px",
    boxShadow: theme.shadows[5],
  },
  button: {
    padding: "5px 10px",
  },
}))

const CallToAction = () => {
  const classes = useStyles()
  const matchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))

  return (
    <Grid container classes={{ root: classes.mainContainer }}>
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="h6"
              style={{ fontWeight: "bold" }}
            >
              Our commitment
            </Typography>
          </Grid>
          <Grid item style={{ maxWidth: "30rem", marginBottom: "1rem" }}>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
            >
              Make great products to accompany your daily activity, made with
              high selected fabric and durable!
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item classes={{ root: classes.buttonContainer }}>
        <Button
          component={Link}
          to="/register"
          classes={{ root: classes.button }}
        >
          <Typography variant="body2">Sign up now</Typography>
          <RightArrowIcon />
        </Button>
      </Grid>
    </Grid>
  )
}

export default CallToAction
