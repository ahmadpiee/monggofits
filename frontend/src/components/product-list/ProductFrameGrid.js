import React, { useState } from "react"
import { Grid, Typography, makeStyles } from "@material-ui/core"
import theme from "@components/ui/theme"
import ModalView from "./ModalView"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    boxShadow: theme.shadows[5],
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
}))

const ProductFrameGrid = ({ product, variant }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const imageUrl = variant.images[0].url
  const productName = product.node.name.split(" ")[0]

  return (
    <Grid item>
      <Grid
        container
        direction="column"
        classes={{ root: classes.mainContainer }}
        onClick={() => setOpen(true)}
      >
        <Grid item classes={{ root: classes.frameContainer }}>
          <img
            src={imageUrl}
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
      <ModalView
        open={open}
        setOpen={setOpen}
        url={imageUrl}
        name={productName}
        price={variant.price}
        product={product}
      />
    </Grid>
  )
}

export default ProductFrameGrid
