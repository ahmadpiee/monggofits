import React from "react"
import {
  Grid,
  IconButton,
  Chip,
  makeStyles,
  FormControl,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@material-ui/core"
import { CloseIcon, FilterIcon } from "@components/Icons"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    padding: "1rem 0",
  },
  checkbox: {
    color: theme.palette.common.white,
  },
  optionsContainer: {
    [theme.breakpoints.down("xs")]: {
      "& > :not(:last-child)": {
        marginBottom: "1rem",
      },
    },
  },
}))

const Filter = ({ setOption, filterOptions }) => {
  const classes = useStyles()

  return (
    <Grid
      item
      container
      justifyContent="space-between"
      alignItems="center"
      classes={{ root: classes.mainContainer }}
    >
      <Grid item>
        <IconButton onClick={() => setOption(null)}>
          <FilterIcon />
        </IconButton>
      </Grid>
      {/* */}
      <Grid item xs>
        <Grid
          container
          justifyContent="space-around"
          alignContent="center"
          classes={{ root: classes.optionsContainer }}
        >
          {Object.keys(filterOptions)
            .filter(option => filterOptions[option] !== null)
            .map(option => (
              <Grid item key={option}>
                <Grid container direction="column">
                  <Grid item>
                    <Chip label={option} />
                  </Grid>
                  <Grid item>
                    <FormControl>
                      <FormGroup>
                        {filterOptions[option].map(({ label, checked }) => (
                          <FormControlLabel
                            classes={{ label: classes.checkbox }}
                            key={label}
                            label={label}
                            control={
                              <Checkbox
                                classes={{ root: classes.checkbox }}
                                checked={checked}
                                name={label}
                              />
                            }
                          />
                        ))}
                      </FormGroup>
                    </FormControl>
                  </Grid>
                </Grid>
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

export default Filter
