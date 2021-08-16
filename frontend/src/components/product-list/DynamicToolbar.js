import React from "react"
import { Grid, Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({}))

export default function DynamicToolbar() {
  const classes = useStyles()

  return (
    <Grid item container direction="column">
      <Grid item>
        <h1>test</h1>
      </Grid>
    </Grid>
  )
}
