import React from "react"
import { Grid, makeStyles } from "@material-ui/core"
import FunctionContainer from "./FunctionContainer"

const useStyles = makeStyles(theme => ({
  toolBarContainer: {
    border: `5px solid ${theme.palette.secondary.main}`,
    borderRadius: 20,
    width: "95%",
    minHeight: "20rem",
    height: "auto",
  },
}))

const DynamicToolbar = ({ filterOptions }) => {
  const classes = useStyles()

  return (
    <Grid
      item
      container
      direction="column"
      classes={{ root: classes.toolBarContainer }}
    >
      <FunctionContainer filterOptions={filterOptions} />
    </Grid>
  )
}

export default DynamicToolbar
