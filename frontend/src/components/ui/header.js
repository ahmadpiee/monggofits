import React from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Tabs,
  Tab,
  IconButton,
} from "@material-ui/core"
import { BsSearch, BsPersonFill } from "react-icons/bs"
import { GrCart } from "react-icons/gr"
import { HeaderStyles } from "./globalStyles"

const header = () => {
  const classes = HeaderStyles()

  return (
    <AppBar color="transparent" elevation={0}>
      <Toolbar>
        <Button>
          <Typography variant="h1">
            <span className={classes.logoText}>Monggo</span>
            fits
          </Typography>
        </Button>
        <Tabs
          value={0}
          classes={{ indicator: classes.coloredIndicator, root: classes.tabs }}
        >
          <Tab label="Hoodie" />
          <Tab label="T-Shirt" />
          <Tab label="Boxer-Pants" />
          <Tab label="Contact Us" />
        </Tabs>
        <IconButton>
          <BsSearch size={25} color="black" />
        </IconButton>
        <IconButton>
          <GrCart size={25} color="black" />
        </IconButton>
        <IconButton>
          <BsPersonFill size={25} color="black" />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default header
