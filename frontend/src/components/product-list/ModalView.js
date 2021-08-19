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
import Rating from "@components/home/Rating"
import { GoDetailsIcon } from "@components/Icons"
import Formatter from "@components/Formatter"
import Sizes from "./Sizes"

const useStyles = makeStyles(theme => ({
  selectedFrame: {
    height: "60rem",
    width: "70rem",
    padding: "0 !important",
  },
  modalView: {
    maxWidth: "100%",
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
    padding: "1.5rem",
  },
  infoContainer: {
    height: "100%",
  },
  text: {
    color: theme.palette.common.white,
  },
  button: {
    padding: "0",
  },
  chipContainer: {
    display: "flex",
    alignItems: "center",
  },
  chiproot: {
    transform: "scale(1.25)",
  },
}))

const ModalView = ({ open, setOpen, url, name, price, product }) => {
  const classes = useStyles()

  var sizes = []
  product.node.variants.map(variant => sizes.push(variant.size))

  return (
    <Dialog
      classes={{ paper: classes.modalView }}
      open={open}
      onClose={() => setOpen(false)}
    >
      <DialogContent classes={{ root: classes.selectedFrame }}>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <img src={url} alt={name} className={classes.image} />
          </Grid>

          <Grid
            item
            container
            justifyContent="space-between"
            classes={{ root: classes.toolbar }}
          >
            <Grid item>
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

            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <Sizes sizes={sizes} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

export default ModalView
