import React from "react"
import { Grid, Typography, makeStyles, Chip } from "@material-ui/core"
import Formatter from "@components/Formatter"
import Rating from "@components/Rating"
import { Sizes, ColorSwitch, QtyButton } from "../atoms"

const useStyles = makeStyles(theme => ({
  mainContainer: {},
  frameContainer: {
    height: "25rem",
  },
  productImage: {
    height: "15rem",
    width: "15rem",
  },
  infoContainer: {
    background: theme.palette.primary.main,
    height: "100%",
    width: "100%",
    borderRadius: 20,
    padding: "1.5rem 1rem",
  },
  text: {
    color: theme.palette.common.white,
  },
}))

const ProductFrameList = ({ product, variant }) => {
  const classes = useStyles()

  return (
    <Grid item container classes={{ root: classes.mainContainer }}>
      <Grid
        item
        xs={10}
        container
        alignItems="center"
        justifyContent="space-evenly"
        classes={{ root: classes.frameContainer }}
      >
        {variant.images.slice(0, 4).map(image => (
          <Grid item key={image.url}>
            <img
              src={image.url}
              className={classes.productImage}
              alt={image.url}
            />
          </Grid>
        ))}
      </Grid>

      <Grid
        item
        xs={2}
        container
        direction="column"
        classes={{ root: classes.infoContainer }}
      >
        <Grid item>
          <Typography variant="h6" classes={{ root: classes.text }}>
            {product.node.name.split(" ")[0]}
          </Typography>
        </Grid>

        <Grid item>
          <Rating number={4.5} />
        </Grid>

        <Grid item>
          <Chip label={`IDR ${Formatter.format(variant.price)} `} />
        </Grid>

        <Grid item>
          <Typography variant="body1" classes={{ root: classes.text }}>
            12 Count in stock
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProductFrameList
