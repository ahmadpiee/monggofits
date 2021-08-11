import React, { useState } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Tabs,
  Tab,
  IconButton,
  useMediaQuery,
  Hidden,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core"
import account from "../../images/account.svg"
import search from "../../images/search.svg"
import cart from "../../images/cart.svg"
import menu from "../../images/menu.svg"
import { Link, navigate } from "gatsby"

const useStyles = makeStyles(theme => ({
  coloredIndicator: {
    backgroundColor: "#cf2f2f",
  },
  logoText: {
    color: theme.palette.common.red1,
  },
  logoContainer: {
    [theme.breakpoints.down("md")]: {
      marginRight: "auto",
    },
  },
  tabs: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  tab: {
    ...theme.typography.body1,
    fontWeight: 600,
  },
  icon: {
    height: "1.5rem",
    width: "1.5rem",
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
  },
  listItemText: {
    color: "#fff",
  },
}))

export default function Header({ categories }) {
  const classes = useStyles()
  const matchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))
  const [drawerOpen, setDrawerOpen] = useState(false)

  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent)

  const activeIndex = () => {
    const found = routes.indexOf(
      routes.filter(
        ({ node: { name, link } }) =>
          (link || `/${name.toLowerCase()}`) === window.location.pathname
      )[0]
    )
    return found === -1 ? false : found
  }

  const routes = [
    ...categories,
    { node: { name: "Contact Us", strapiId: "contact", link: "/contact" } },
  ]

  const tabs = (
    <Tabs
      value={activeIndex()}
      classes={{ indicator: classes.coloredIndicator, root: classes.tabs }}
    >
      {routes.map(route => (
        <Tab
          component={Link}
          to={route.node.link || `/${route.node.name.toLowerCase()}`}
          classes={{ root: classes.tab }}
          label={route.node.name}
          key={route.node.strapiId}
        />
      ))}
    </Tabs>
  )

  const drawer = (
    <SwipeableDrawer
      open={drawerOpen}
      onOpen={() => setDrawerOpen(true)}
      onClose={() => setDrawerOpen(false)}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      classes={{ paper: classes.drawer }}
    >
      <List disablePadding>
        {routes.map((route, i) => (
          <ListItem
            selected={activeIndex() === i}
            component={Link}
            to={route.node.link || `/${route.node.name.toLowerCase()}`}
            divider
            button
            key={route.node.strapiId}
          >
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary={route.node.name}
            />
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  )

  const icons = [
    {
      name: search,
      alt: "search",
      visible: true,
      onClick: () => console.log("search"),
    },
    {
      name: cart,
      alt: "cart",
      visible: true,
      link: "/cart",
    },
    {
      name: account,
      alt: "account",
      visible: !matchesMD,
      link: "/account",
    },
    {
      name: menu,
      alt: "menu",
      visible: matchesMD,
      onClick: () => setDrawerOpen(true),
    },
  ]

  return (
    <AppBar color="transparent" elevation={0}>
      <Toolbar>
        <Button
          component={Link}
          to="/"
          classes={{ root: classes.logoContainer }}
        >
          <Typography variant="h1">
            <span className={classes.logoText}>Monggo</span>
            fits
          </Typography>
        </Button>

        {matchesMD ? drawer : tabs}

        {icons.map(icon => {
          if (icon.visible) {
            return (
              <IconButton
                onClick={icon.onClick}
                component={icon.onClick ? undefined : Link}
                to={icon.onClick ? undefined : icon.link}
                key={icon.alt}
              >
                <img className={classes.icon} src={icon.name} alt={icon.alt} />
              </IconButton>
            )
          }
        })}
      </Toolbar>
    </AppBar>
  )
}
