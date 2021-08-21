import React from "react"
import { Grid, makeStyles, Button } from "@material-ui/core"
import clsx from "clsx"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    marginTop: "0.5rem",
    "&:not(:first-child)": {
      marginLeft: "-0.55rem",
    },
  },
  colorSwitch: {
    border: `2px solid ${theme.palette.common.white}`,
    height: "3rem",
    width: "3rem",
    borderRadius: "50%",
    minWidth: 0,
  },
  selected: {
    borderColor: theme.palette.common.black,
  },
}))

const ColorSwitch = ({ colors, selectedColor, setSelectedColor, products }) => {
  const classes = useStyles()

  return (
    <Grid item container>
      {colors.sort().map(color => (
        <Grid item classes={{ root: classes.mainContainer }}>
          <Button
            onClick={() => setSelectedColor(color)}
            style={{ background: color }}
            classes={{
              root: clsx(classes.colorSwitch, {
                [classes.selected]: selectedColor === color,
              }),
            }}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default ColorSwitch
