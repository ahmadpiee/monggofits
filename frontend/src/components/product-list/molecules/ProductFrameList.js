import React from "react"
import { Grid, Typography, makeStyles, Chip } from "@material-ui/core"
import Formatter from "@components/Formatter"
import Rating from "@components/Rating"
import { Sizes, ColorSwitch, QtyButton } from "../atoms"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { colorIndex } from "./ProductFrameGrid"
import { Link } from "gatsby"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

const useStyles = makeStyles(theme => ({
  frameContainer: {
    height: "28rem",
  },
  productImage: {
    height: "15rem",
    width: "15rem",
    "&:hover": {
      transform: "scale(1.05)",
      transition: "transform 1.25s cubic-bezier(0.25, 0.45, 0.45, 2.5)",
    },
  },
  infoContainer: {
    background: theme.palette.secondary.main,
    height: "100%",
    width: "100%",
    padding: "1rem",
    // [theme.breakpoints.down("md")]: {
    //   height: "50%",
    // },
  },
  text: {
    color: theme.palette.common.white,
  },
  chipContainer: {
    margin: "1rem 0",
  },
  chip: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  midContainer: {
    margin: "2rem 0",
  },
}))

const ProductFrameList = ({
  product,
  variant,
  sizes,
  colors,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
}) => {
  const classes = useStyles()
  const imageIndex = colorIndex(product, selectedColor, variant)

  const images =
    imageIndex !== -1
      ? product.node.variants[imageIndex].images
      : variant.images

  return (
    <Grid item container>
      <Grid
        item
        lg={9}
        container
        alignItems="center"
        justifyContent="space-evenly"
        classes={{ root: classes.frameContainer }}
      >
        {images.slice(0, 4).map(image => {
          const imageUrl = getImage(image.localFile)
          return (
            <Grid item key={imageUrl}>
              <Zoom zoomMargin={10}>
                <GatsbyImage
                  objectFit="contain"
                  image={imageUrl}
                  className={classes.productImage}
                  alt="Product Picture"
                />
              </Zoom>
            </Grid>
          )
        })}
      </Grid>

      <Grid
        item
        lg={3}
        container
        direction="column"
        justifyContent="space-between"
        classes={{ root: classes.infoContainer }}
      >
        <Grid
          item
          container
          direction="column"
          component={Link}
          to={`/${product.node.category.name.toLowerCase()}/${product.node.name
            .split(" ")[0]
            .toLowerCase()}`}
        >
          <Grid item>
            <Typography variant="h5" classes={{ root: classes.text }}>
              {product.node.name.split(" ")[0]}
            </Typography>
          </Grid>

          <Grid item>
            <Rating number={4.5} />
          </Grid>

          <Grid item classes={{ root: classes.chipContainer }}>
            <Chip
              label={`IDR ${Formatter.format(variant.price)} `}
              classes={{ label: classes.chip }}
            />
          </Grid>

          <Grid item>
            <Typography variant="body1" classes={{ root: classes.text }}>
              12 Count in stock
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="column"
          classes={{ root: classes.midContainer }}
        >
          <Sizes
            sizes={sizes}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
          <ColorSwitch
            colors={colors}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        </Grid>

        <QtyButton />
      </Grid>
    </Grid>
  )
}

export default ProductFrameList
