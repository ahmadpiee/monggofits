import React from "react"
import { Grid, Typography, makeStyles } from "@material-ui/core"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  container: {
    padding: "2rem 0",
  },
  linkContainerCol: {
    maxWidth: "100%",
  },
  serviceTitle: {
    fontSize: "1.2rem",
    fontWeight: "bolder",
  },
  link: {},
}))

const AdditionialServices = () => {
  const routes = {
    "Custom Your Own Design?": [
      { label: "Ask our production team", href: "https://wa.me/6281296089640" },
    ],
    "Tips to choose good fabric": [
      { label: "Go to our articles", href: "/articles" },
    ],
    "Most Questions!": [{ label: "FAQ", href: "/faq" }],
  }
  const classes = useStyles()
  return (
    <Grid container classes={{ root: classes.container }}>
      {Object.keys(routes).map(category => (
        <Grid
          key={category}
          classes={{ root: classes.linkContainerCol }}
          item
          container
          justifyContent="space-between"
          direction="column"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h1" classes={{ root: classes.serviceTitle }}>
              {category}
            </Typography>
          </Grid>
          {routes[category].map(route => (
            <Grid item key={route.label}>
              <Typography
                component={route.link ? Link : "a"}
                to={route.link ? route.link : undefined}
                href={route.href ? route.href : undefined}
                target="_blank"
                rel="noopener noreferrer"
                variant="body1"
                classes={{ body1: classes.link }}
              >
                {route.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  )
}

export default AdditionialServices
