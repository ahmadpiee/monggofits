import React from "react"
import { Grid, Typography, Button, makeStyles } from "@material-ui/core"
import { Link } from "gatsby"
import { FaLocationArrow } from "react-icons/fa"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    background:
      "linear-gradient(0deg, rgba(245,198,3,1) 0%, rgba(237,231,52,1) 100%)",
    minHeight: "20vh",
    padding: "2rem",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  buttonContainer: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "2.5px",
    boxShadow: theme.shadows[8],
  },
  button: {
    padding: "0.5rem",
  },
  signup: {
    marginRight: "0.5rem",
    fontSize: "1.2rem",
  },
  icon: {
    height: "1rem",
    width: "1rem",
    color: theme.palette.common.white,
  },
}))

const CallToAction = () => {
  const classes = useStyles()

  return (
    <Grid container classes={{ root: classes.mainContainer }}>
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h6">Our commitment</Typography>
          </Grid>
          <Grid item style={{ maxWidth: "30rem", marginBottom: "1rem" }}>
            <Typography variant="body1">
              Make great products to accompany your daily activity, made with
              high selected fabric and durable!
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item classes={{ root: classes.buttonContainer }}>
        <Button classes={{ root: classes.button }}>
          <Typography variant="h4" classes={{ root: classes.signup }}>
            Sign up for free
          </Typography>
          <FaLocationArrow className={classes.icon} />
        </Button>
      </Grid>
    </Grid>
  )
}

export default CallToAction
