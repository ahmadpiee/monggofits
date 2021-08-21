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

  // const possibleSizes = ["S", "M", "L", "XL", "XXL"]
  // const possiblePantsSize = ["28", "30", "32", "34", "36"]

  // var actualSizes = []

  // if (possibleSizes.every(size => sizes.includes(size))) {
  //   actualSizes = possibleSizes
  // } else if (possiblePantsSize.every(size => sizes.includes(size))) {
  //   actualSizes = possiblePantsSize
  // }

  return (
    <Grid item container justifyContent="space-between">
      {sizes.sort().map(size => (
        <Grid item key={size}>
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
