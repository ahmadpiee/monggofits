// the consumer is => ProductList from "@templates/ProductList"
// pay attention to the hooks below

import React, { useState } from "react"
import { Grid, makeStyles } from "@material-ui/core"
import { ProductFrameList, ProductFrameGrid } from "./molecules"

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

const ListOfProducts = ({ products, layout, page, productsPerPage }) => {
  const classes = useStyles({ layout })

  const FrameControl = ({ Frame, product, variant }) => {
    // this hooks consumed by the child level components (ProductFrameGrid, ProductFrameList, QuickView)
    const [selectedSize, setSelectedSize] = useState(null)
    const [selectedColor, setSelectedColor] = useState(null)

    var sizes = []
    var colors = []
    product.node.variants.map(variant => {
      sizes.push(variant.size)
      colors.push(variant.color)
      return sizes && colors
    })

    return (
      <Frame
        sizes={sizes}
        colors={colors}
        selectedSize={selectedSize}
        selectedColor={selectedColor}
        setSelectedSize={setSelectedSize}
        setSelectedColor={setSelectedColor}
        variant={variant}
        product={product}
      />
    )
  }

  var content = []
  products.map((product, i) =>
    product.node.variants.map(variant => content.push({ product: i, variant }))
  )

  return (
    <Grid item container classes={{ root: classes.productContainer }}>
      {content
        .slice((page - 1) * productsPerPage, page * productsPerPage)
        .map(item => (
          <FrameControl
            Frame={layout === "grid" ? ProductFrameGrid : ProductFrameList}
            key={item.variant.id}
            variant={item.variant}
            product={products[item.product]}
          />
        ))}
    </Grid>
  )
}

export default ListOfProducts
