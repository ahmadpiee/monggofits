import React from "react"
import clsx from "clsx"
import {
  Grid,
  Typography,
  makeStyles,
  ButtonGroup,
  Button,
} from "@material-ui/core"
import theme from "@components/ui/theme"
import { ListIcon, GridIcon } from "@components/Icons"
import { useMediaQuery } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    padding: "3rem",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 0",
    },
  },
  descriptionContainer: {
    background: theme.palette.primary.main,
    minHeight: "15rem",
    width: "65%",
    borderRadius: 25,
    textAlign: "center",
    padding: "2rem",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      borderRadius: 0,
    },
  },
  title: {
    color: theme.palette.common.white,
    marginBottom: "0.5rem",
  },
  buttonContainer: {
    position: "absolute",
    right: 0,
    bottom: 0,
    marginRight: "3rem",
    marginBottom: "3rem",
    [theme.breakpoints.down("md")]: {
      position: "relative",
      display: "flex",
      alignSelf: "flex-end",
      margin: "2rem 0 0 0 ",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "2rem 2rem 0 0",
    },
  },
  button: {
    border: `4px solid ${theme.palette.primary.main}`,
    borderRadius: 30,
    padding: "0.5rem 1rem",
    borderRightColor: `${theme.palette.primary.dark} !important`,
    background: theme.palette.common.white,
    "&:hover": {
      background: theme.palette.common.lightGray,
    },
  },
  selected: {
    background: theme.palette.primary.main,
    "&:hover": {
      background: theme.palette.primary.dark,
    },
  },
}))

const DescriptionContainer = ({ name, description, layout, setLayout }) => {
  const classes = useStyles()

  const matchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))

  return (
    <Grid
      item
      container
      direction={matchesMD ? "column" : "row"}
      alignItems={matchesMD ? "center" : undefined}
      classes={{ root: classes.mainContainer }}
      justifyContent="center"
    >
      <Grid item classes={{ root: classes.descriptionContainer }}>
        <Typography variant="h4" classes={{ root: classes.title }}>
          {name}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </Grid>

      <Grid item classes={{ root: classes.buttonContainer }}>
        <ButtonGroup>
          <Button
            onClick={() => setLayout("list")}
            classes={{
              outlined: clsx(classes.button, {
                [classes.selected]: layout === "list",
              }),
            }}
          >
            <ListIcon
              color={
                layout === "list"
                  ? theme.palette.common.white
                  : theme.palette.secondary.main
              }
            />
          </Button>
          <Button
            onClick={() => setLayout("grid")}
            classes={{
              outlined: clsx(classes.button, {
                [classes.selected]: layout === "grid",
              }),
            }}
          >
            <GridIcon
              color={
                layout === "grid"
                  ? theme.palette.common.white
                  : theme.palette.secondary.main
              }
            />
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  )
}

export default DescriptionContainer
