import React from "react"
import { Grid, makeStyles } from "@material-ui/core"
import ProductFrameGrid from "./ProductFrameGrid"

const useStyles = makeStyles(theme => ({
  productContainer: {
    width: "95%",
    "& > *": {
      marginRight: "calc((100% - (25rem * 4)) / 3)",
      marginBottom: "3rem",
    },
    "& > :nth-child(4n)": {
      marginRight: 0,
    },
  },
}))

const ListOfProducts = ({ products }) => {
  const classes = useStyles()

  return (
    <Grid item container classes={{ root: classes.productContainer }}>
      {products.map(product =>
        product.node.variants.map(variant => (
          <ProductFrameGrid
            key={variant.id}
            variant={variant}
            product={product}
          />
        ))
      )}
    </Grid>
  )
}

export default ListOfProducts
