import React from "react"
import { Grid, makeStyles } from "@material-ui/core"
import { ProductFrameList, ProductFrameGrid } from "./molecules"

// consumer > ProductList from "@templates/ProductList"

const useStyles = makeStyles(theme => ({
  productContainer: {
    width: "95%",
    "& > *": {
      marginRight: ({ layout }) =>
        layout === "grid" ? "calc((100% - (25rem * 4)) / 3)" : 0,
      marginBottom: "3rem",
    },
    "& > :nth-child(4n)": {
      marginRight: 0,
    },
  },
}))

const ListOfProducts = ({ products, layout }) => {
  const classes = useStyles({ layout })

  const FrameControl = ({ Frame, product, variant }) => {
    return <Frame variant={variant} product={product} />
  }

  return (
    <Grid item container classes={{ root: classes.productContainer }}>
      {products.map(product =>
        product.node.variants.map(variant => (
          <FrameControl
            Frame={layout === "grid" ? ProductFrameGrid : ProductFrameList}
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
