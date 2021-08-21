import React, { useState } from "react"
import {
  Grid,
  Typography,
  Button,
  ButtonGroup,
  Badge,
  makeStyles,
} from "@material-ui/core"
import { CartIcon } from "@components/Icons"

const useStyles = makeStyles(theme => ({
  mainGroup: {
    height: "3rem",
  },
  qtyText: {
    color: theme.palette.common.white,
  },
  countButtons: {
    height: "1.525rem",
    borderRadius: 0,
    background: theme.palette.secondary.dark,
  },
  endButtons: {
    background: theme.palette.secondary.dark,
    borderRadius: 50,
  },
  cartButton: {
    color: theme.palette.common.white,
    width: "2.25rem",
    height: "2.25rem",
  },
  badge: {
    color: theme.palette.common.white,
    fontSize: "1.25rem",
    width: "1.1rem",
    height: "1.1rem",
    minWidth: 0,
    backgroundColor: theme.palette.secondary.dark,
    padding: 0,
  },
}))

const QtyButton = ({ className }) => {
  const classes = useStyles()
  const [qty, setQty] = useState(1)

  return (
    <Grid item className={className}>
      <ButtonGroup classes={{ root: classes.mainGroup }}>
        <Button disabled classes={{ root: classes.endButtons }}>
          <Typography variant="h6" classes={{ root: classes.qtyText }}>
            {qty}
          </Typography>
        </Button>

        <ButtonGroup orientation="vertical">
          <Button
            onClick={() => setQty(qty + 1)}
            classes={{ root: classes.countButtons }}
          >
            <Typography variant="h6" classes={{ root: classes.qtyText }}>
              +
            </Typography>
          </Button>

          <Button
            onClick={() => setQty(qty - 1)}
            disabled={qty === 1}
            classes={{ root: classes.countButtons }}
          >
            <Typography variant="h6" classes={{ root: classes.qtyText }}>
              -
            </Typography>
          </Button>
        </ButtonGroup>

        <Button classes={{ root: classes.endButtons }}>
          <Badge
            overlap="circular"
            badgeContent="+"
            classes={{ badge: classes.badge }}
          >
            <CartIcon className={classes.cartButton} />
          </Badge>
        </Button>
      </ButtonGroup>
    </Grid>
  )
}

export default QtyButton
