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

const useStyles = makeStyles(theme => ({
  mainContainer: {
    padding: "3rem",
    position: "relative",
  },
  descriptionContainer: {
    background: theme.palette.primary.main,
    minHeight: "15rem",
    width: "60rem",
    borderRadius: 20,
    textAlign: "center",
    padding: "2rem",
  },
  title: {
    color: theme.palette.common.white,
  },
  buttonContainer: {
    position: "absolute",
    right: 0,
    bottom: 0,
    marginRight: "3rem",
    marginBottom: "3rem",
  },
  button: {
    border: `2px solid ${theme.palette.primary.main}`,
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
      background: theme.palette.primary.light,
    },
  },
}))

const DescriptionContainer = ({ name, description, layout, setLayout }) => {
  const classes = useStyles()

  return (
    <Grid
      item
      container
      classes={{ root: classes.mainContainer }}
      justifyContent="center"
    >
      <Grid item classes={{ root: classes.descriptionContainer }}>
        <Typography
          variant="h4"
          paragraph
          gutterBottom
          classes={{ root: classes.title }}
        >
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
