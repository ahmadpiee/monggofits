import React from "react"
import { Grid, Typography, makeStyles, Chip } from "@material-ui/core"
import Formatter from "@components/Formatter"
import Rating from "@components/Rating"
import { Sizes, ColorSwitch, QtyButton } from "../atoms"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  mainContainer: {},
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
  },
  text: {
    color: theme.palette.common.white,
  },
  chip: {
    margin: "1rem 0",
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

  return (
    <Grid item container classes={{ root: classes.mainContainer }}>
      <Grid
        item
        xs={9}
        container
        alignItems="center"
        justifyContent="space-evenly"
        classes={{ root: classes.frameContainer }}
      >
        {variant.images.slice(0, 4).map(image => {
          const imageUrl = getImage(image.localFile)
          return (
            <Grid item key={imageUrl}>
              <GatsbyImage
                image={imageUrl}
                className={classes.productImage}
                alt="Product Picture"
              />
            </Grid>
          )
        })}
      </Grid>

      <Grid
        item
        xs={3}
        container
        direction="column"
        justifyContent="space-between"
        classes={{ root: classes.infoContainer }}
      >
        <Grid item container direction="column">
          <Grid item>
            <Typography variant="h5" classes={{ root: classes.text }}>
              {product.node.name.split(" ")[0]}
            </Typography>
          </Grid>

          <Grid item>
            <Rating number={4.5} />
          </Grid>

          <Grid item classes={{ root: classes.chip }}>
            <Chip label={`IDR ${Formatter.format(variant.price)} `} />
          </Grid>

          <Grid item>
            <Typography variant="body1" classes={{ root: classes.text }}>
              12 Count in stock
            </Typography>
          </Grid>
        </Grid>

        <Grid item container direction="column">
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
