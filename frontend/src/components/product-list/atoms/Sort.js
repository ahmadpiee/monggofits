import React from "react"
import {
  Grid,
  IconButton,
  Chip,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core"
import { SortIcon, CloseIcon } from "@components/Icons"

const useStyles = makeStyles(theme => ({
  chipContainer: {
    [theme.breakpoints.down("md")]: {
      margin: "0.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0.3rem",
    },
  },
}))

const Sort = ({ setOption }) => {
  const classes = useStyles()
  const matchesXS = useMediaQuery(theme => theme.breakpoints.down("xs"))

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

      <Grid item xs>
        <Grid
          container
          justifyContent="space-evenly"
          direction={matchesXS ? "column" : "row"}
          alignItems="center"
        >
          {sortOptions.map(option => (
            <Grid item key={option.label}>
              <Chip
                classes={{ root: classes.chipContainer }}
                label={option.label}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid item>
        <IconButton onClick={() => setOption(null)}>
          <CloseIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default Sort
