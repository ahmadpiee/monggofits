import React from "react"
import { Grid, IconButton, Chip, makeStyles } from "@material-ui/core"
import { SortIcon, CloseIcon } from "@components/Icons"

const useStyles = makeStyles(theme => ({
  chipRoot: {
    background: theme.palette.secondary.dark,
  },
  chipLabel: {
    ...theme.typography.body1,
    color: theme.palette.common.white,
  },
}))

const Sort = ({ setOption }) => {
  const classes = useStyles()
  const sortOptions = [
    { label: "A-Z" },
    { label: "Z-A" },
    { label: "NEWEST" },
    { label: "OLDEST" },
    { label: "PRICE ↓" },
    { label: "PRICE ↑" },
    { label: "REVIEWS" },
  ]
  return (
    <Grid item container justifyContent="space-between" alignItems="center">
      <Grid item>
        <IconButton onClick={() => setOption(null)}>
          <SortIcon />
        </IconButton>
      </Grid>
      {/* */}
      <Grid item xs>
        <Grid container justifyContent="space-evenly">
          {sortOptions.map(option => (
            <Grid item key={option.label}>
              <Chip
                label={option.label}
                classes={{ root: classes.chipRoot, label: classes.chipLabel }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/*  */}
      <Grid item>
        <IconButton onClick={() => setOption(null)}>
          <CloseIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default Sort
