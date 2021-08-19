import React from "react"
import { Grid, makeStyles, IconButton } from "@material-ui/core"
import { SortIcon, FilterIcon } from "@components/Icons"
import Sort from "./Sort"
import Filter from "./Filter"

const useStyles = makeStyles(theme => ({
  functionContainer: {
    backgroundColor: theme.palette.primary.main,
    minHeight: "6rem",
    height: "auto",
    borderRadius: ({ option }) => (option !== null ? "10px" : "10px 10px 0 0"),
  },
}))

const FunctionContainer = ({ filterOptions, option, setOption }) => {
  const classes = useStyles({ option })

  const content = () => {
    switch (option) {
      case "sort":
        return <Sort setOption={setOption} />
      case "filter":
        return <Filter setOption={setOption} filterOptions={filterOptions} />
      default:
        const items = [
          {
            icon: <FilterIcon />,
            alt: "filter",
          },
          {
            icon: <SortIcon />,
            alt: "sort",
          },
        ]
        return (
          <Grid
            item
            container
            justifyContent="space-around"
            alignItems="center"
          >
            {items.map(item => (
              <Grid item key={item.alt}>
                <IconButton onClick={() => setOption(item.alt)}>
                  {item.icon}
                </IconButton>
              </Grid>
            ))}
          </Grid>
        )
    }
  }

  return (
    <Grid item container classes={{ root: classes.functionContainer }}>
      {content()}
    </Grid>
  )
}

export default FunctionContainer
