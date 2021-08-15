import React from "react"
import {
  Grid,
  Typography,
  Button,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core"
import { Link } from "gatsby"
import { FaLocationArrow } from "react-icons/fa"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    background:
      "linear-gradient(0deg, rgba(245,198,3,1) 0%, rgba(237,231,52,1) 100%)",
    minHeight: "20vh",
    padding: "2.5rem",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  buttonContainer: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "2.5px",
    boxShadow: theme.shadows[5],
  },
  button: {
    padding: "0.5rem",
  },
  signup: {
    marginRight: "0.5rem",
  },
  icon: {
    height: "1rem",
    width: "1rem",
    color: theme.palette.common.white,
    [theme.breakpoints.down("md")]: {
      height: "0.8rem",
      width: "0.8rem",
    },
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
          <Typography variant="body2" classes={{ root: classes.signup }}>
            Sign up for free
          </Typography>
          <FaLocationArrow className={classes.icon} />
        </Button>
      </Grid>
    </Grid>
  )
}

export default CallToAction
