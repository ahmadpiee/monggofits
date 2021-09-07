import React, { useState } from "react"
import { Grid, makeStyles } from "@material-ui/core"
import { DescriptionContainer, FunctionContainer } from "./atoms"

// The consumer is => ProductList from "@templates/ProductList"

const useStyles = makeStyles(theme => ({
  toolBarContainer: {
    border: `5px solid ${theme.palette.primary.main}`,
    borderRadius: 25,
    width: "95%",
    height: "auto",
    marginBottom: "5rem",
  },
}))

const DynamicToolbar = ({
  filterOptions,
  name,
  description,
  layout,
  setLayout,
}) => {
  const classes = useStyles()
  const [option, setOption] = useState(null)

  return (
    <Grid
      item
      container
      direction="column"
      classes={{ root: classes.toolBarContainer }}
    >
      <FunctionContainer
        option={option}
        setOption={setOption}
        filterOptions={filterOptions}
      />
      {option === null && (
        <DescriptionContainer
          layout={layout}
          setLayout={setLayout}
          name={name}
          description={description}
        />
      )}
    </Grid>
  )
}

export default DynamicToolbar
