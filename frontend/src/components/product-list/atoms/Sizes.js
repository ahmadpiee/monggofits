import React from "react"
import { Grid, Typography, makeStyles, Button } from "@material-ui/core"
import clsx from "clsx"

const useStyles = makeStyles(theme => ({
  size: {
    color: theme.palette.common.white,
  },
  button: {
    border: `2px solid ${theme.palette.common.white}`,
    height: "3rem",
    width: "3rem",
    borderRadius: "50%",
    minWidth: 0,
  },
  selected: {
    background: theme.palette.primary.dark,
    "&:hover": {
      background: theme.palette.primary.dark,
    },
  },
}))

const Sizes = ({ sizes, selectedSize, setSelectedSize }) => {
  const classes = useStyles()

  return (
    <Grid item container justifyContent="flex-start">
      {sizes.map((size, i) => (
        <Grid item key={i}>
          <Button
            onClick={() => setSelectedSize(size)}
            classes={{
              root: clsx(classes.button, {
                [classes.selected]: selectedSize === size,
              }),
            }}
          >
            <Typography variant="body1" classes={{ root: classes.size }}>
              {size}
            </Typography>
          </Button>
        </Grid>
      ))}
    </Grid>
  )
}

export default Sizes
