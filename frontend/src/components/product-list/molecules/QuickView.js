import React from "react"
import {
  Grid,
  Typography,
  makeStyles,
  Dialog,
  DialogContent,
  Button,
  Chip,
} from "@material-ui/core"
import Rating from "@components/Rating"
import { GoDetailsIcon } from "@components/Icons"
import Formatter from "@components/Formatter"
import { QtyButton, Sizes, ColorSwitch } from "../atoms"
import { GatsbyImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    maxWidth: "100%",
  },
  selectedFrame: {
    height: "60rem",
    width: "70rem",
    padding: "0 !important",
  },
  image: {
    height: "40rem",
    width: "40rem",
    marginTop: "2rem",
  },
  toolbar: {
    height: "13rem",
    background: theme.palette.secondary.main,
    marginTop: "2rem",
    padding: "0.75rem 1.5rem",
    position: "relative",
  },
  infoContainer: {
    height: "100%",
  },
  text: {
    color: theme.palette.common.white,
  },
  button: {
    padding: 0,
  },
  chipContainer: {
    display: "flex",
    alignItems: "center",
  },
  chiproot: {
    transform: "scale(1.25)",
  },
  qtyButton: {
    marginTop: "1.25rem",
  },
  infoItem: {
    position: "absolute",
    left: "1.5rem",
    height: "calc(100% - 1rem)",
  },
  actionsItem: {
    position: "absolute",
    right: "1.5rem",
  },
}))

const QuickView = ({
  open,
  setOpen,
  image,
  name,
  price,
  sizes,
  colors,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
}) => {
  const classes = useStyles()

  return (
    <Dialog
      classes={{ paper: classes.mainContainer }}
      open={open}
      onClose={() => setOpen(false)}
    >
      <DialogContent classes={{ root: classes.selectedFrame }}>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <GatsbyImage
              image={image}
              alt={name}
              className={classes.image}
              objectFit="contain"
            />
          </Grid>

          <Grid
            item
            container
            justifyContent="center"
            classes={{ root: classes.toolbar }}
          >
            <Grid item classes={{ root: classes.infoItem }}>
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                classes={{ root: classes.infoContainer }}
              >
                <Grid item>
                  <Typography variant="h4" classes={{ root: classes.text }}>
                    {name}
                  </Typography>
                  <Rating number={4} />
                </Grid>

                <Grid item>
                  <Typography variant="h6" classes={{ root: classes.text }}>
                    12 Count in stock
                  </Typography>
                  <Button classes={{ root: classes.button }}>
                    <Typography
                      variant="h6"
                      classes={{ root: classes.text }}
                      style={{ textTransform: "none" }}
                    >
                      Details
                    </Typography>
                    <GoDetailsIcon />
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid item classes={{ root: classes.chipContainer }}>
              <Chip
                label={`IDR ${Formatter.format(`${price}`)}`}
                classes={{ root: classes.chiproot }}
              />
            </Grid>

            <Grid item classes={{ root: classes.actionsItem }}>
              <Grid container direction="column">
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
                <QtyButton className={classes.qtyButton} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

export default QuickView
