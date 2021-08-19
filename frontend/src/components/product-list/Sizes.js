import React from "react"
import { Grid, Typography, makeStyles, Button } from "@material-ui/core"

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
}))

const Sizes = ({ sizes }) => {
  const classes = useStyles()

  const possibleSizes = ["S", "M", "L", "XL", "XXL"]
  const possiblePantsSize = ["28", "30", "32", "34", "36"]
  const possibleShoesSize = [
    "38",
    "39",
    "40",
    "40.5",
    "41",
    "42",
    "43",
    "44.5",
    "45",
  ]
  var actualSizes = []

  if (possibleSizes.every(size => sizes.includes(size))) {
    actualSizes = possibleSizes
  } else if (possiblePantsSize.every(size => sizes.includes(size))) {
    actualSizes = possiblePantsSize
  } else if (possibleShoesSize.every(size => sizes.includes(size))) {
    actualSizes = possibleShoesSize
  }

  return (
    <Grid item container justifyContent="space-between">
      {actualSizes.map(size => (
        <Grid item key={size}>
          <Button classes={{ root: classes.button }}>
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
