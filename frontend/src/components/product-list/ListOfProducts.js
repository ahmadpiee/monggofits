// the consumer is => ProductList from "@templates/ProductList"
// pay attention to the hooks below

import React, { useState } from "react"
import { Grid, makeStyles, useMediaQuery } from "@material-ui/core"
import { ProductFrameList, ProductFrameGrid } from "./molecules"

const useStyles = makeStyles(theme => ({
  productContainer: {
    width: "95%",
    [theme.breakpoints.only("xl")]: {
      "& > *": {
        marginRight: ({ layout }) =>
          layout === "grid" ? "calc((100% - (25rem * 4)) / 3)" : 0,
        marginBottom: "5rem",
      },
      "& > :nth-child(4n)": {
        marginRight: 0,
      },
    },
    [theme.breakpoints.only("lg")]: {
      "& > *": {
        marginRight: ({ layout }) =>
          layout === "grid" ? "calc((100% - (25rem * 3)) / 2)" : 0,
        marginBottom: "5rem",
      },
      "& > :nth-child(3n)": {
        marginRight: 0,
      },
    },
    [theme.breakpoints.only("md")]: {
      "& > *": {
        marginRight: ({ layout }) =>
          layout === "grid" ? "calc(100% - (25rem * 2))" : 0,
        marginBottom: "5rem",
      },
      "& > :nth-child(2n)": {
        marginRight: 0,
      },
    },
    [theme.breakpoints.down("sm")]: {
      "& > *": {
        marginBottom: "5rem",
      },
    },
  },
}))

const ListOfProducts = ({ products, layout, page, productsPerPage }) => {
  const classes = useStyles({ layout })
  const matchesSM = useMediaQuery(theme => theme.breakpoints.down("sm"))

  const FrameControl = ({ Frame, product, variant }) => {
    // this hooks consumed by the child level components (ProductFrameGrid, ProductFrameList, QuickView)
    const [selectedSize, setSelectedSize] = useState(null)
    const [selectedColor, setSelectedColor] = useState(null)

    var sizes = []
    var colors = []
    product.node.variants.map(variant => {
      if (!sizes.includes(variant.size)) sizes.push(variant.size)
      if (!colors.includes(variant.color)) colors.push(variant.color)
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
    <Grid
      item
      container
      direction={matchesSM ? "column" : "row"}
      alignItems="center"
      classes={{ root: classes.productContainer }}
    >
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
