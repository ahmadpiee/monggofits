import React, { useState } from "react"
import { Grid, Typography, makeStyles, useMediaQuery } from "@material-ui/core"
import { navigate } from "gatsby"
import clsx from "clsx"
import theme from "@components/ui/theme"
import { QuickView } from "."
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    cursor: "pointer",
  },
  frameContainer: {
    height: "25rem",
    width: "25rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    alignSelf: "center",
    height: "20rem",
    width: "20rem",
  },
  title: {
    background: theme.palette.primary.main,
    height: "6rem",
    width: "25rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
  },
  invisibility: {
    visibility: "hidden",
  },
}))

export const colorIndex = (product, color, variant) => {
  return product.node.variants.indexOf(
    product.node.variants.filter(
      item => item.color === color && variant.style === item.style
    )[0]
  )
}

const ProductFrameGrid = ({
  product,
  variant,
  sizes,
  colors,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
}) => {
  const [open, setOpen] = useState(false)

  const classes = useStyles()

  const matchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))
  if (matchesMD && open) {
    setOpen(false)
  }

  const imageIndex = colorIndex(product, selectedColor, variant)

  const imageUrl =
    imageIndex !== -1
      ? product.node.variants[imageIndex].images[0].localFile
      : variant.images[0].localFile
  const image = getImage(imageUrl)

  const productName = product.node.name.split(" ")[0]

  return (
    <Grid
      item
      classes={{
        root: clsx(classes.mainContainer, {
          [classes.invisibility]: open === true,
        }),
      }}
    >
      <Grid
        container
        direction="column"
        onClick={() =>
          matchesMD
            ? navigate(
                `/${product.node.category.name.toLowerCase()}/${product.node.name
                  .split(" ")[0]
                  .toLowerCase()}`
              )
            : setOpen(true)
        }
      >
        <Grid item classes={{ root: classes.frameContainer }}>
          <GatsbyImage
            image={image}
            objectFit="contain"
            alt={product.node.name}
            className={classes.image}
          />
        </Grid>
        <Grid item classes={{ root: classes.title }}>
          <Typography
            variant="h6"
            style={{ color: theme.palette.common.white }}
          >
            {productName}
          </Typography>
        </Grid>
      </Grid>
      <QuickView
        open={open}
        setOpen={setOpen}
        image={image}
        name={productName}
        price={variant.price}
        product={product}
        colors={colors}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        sizes={sizes}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
    </Grid>
  )
}

export default ProductFrameGrid
