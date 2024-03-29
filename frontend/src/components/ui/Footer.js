import React from "react"
import { Grid, Typography, makeStyles, IconButton } from "@material-ui/core"
import { Link } from "gatsby"
import { FacebookIcon, InstagramIcon, WhatsappIcon } from "@components/Icons"

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.primary.dark,
    padding: "2rem",
    paddingBottom: "5px",
  },
  link: {
    color: "#fff",
  },
  linkColumn: {
    width: "20rem",
  },
  linkContainer: {
    maxWidth: "100%",
    [theme.breakpoints.down("md")]: {
      marginBottom: "1rem",
    },
  },
  marginTop: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "1rem",
    },
  },
  "@global": {
    body: {
      margin: 0,
    },
    a: {
      textDecoration: "none",
    },
  },
  copyright: {
    marginTop: "2rem",
    fontSize: "10px",
    textAlign: "start",
    color: "#b8b8b8",
  },
}))

const Footer = () => {
  const classes = useStyles()

  const icons = [
    {
      id: 1,
      name: <InstagramIcon />,
      link: "https://www.instagram.com/monggofits",
    },
    {
      id: 2,
      name: <FacebookIcon />,
      link: "https://web.facebook.com/Monggofits-Store-103824892008168",
    },
    {
      id: 3,
      name: <WhatsappIcon />,
      link: "https://wa.me/6281296089640",
    },
  ]

  const routes = {
    "Customer Service": [
      { label: "0813-1853-4781", href: "tel:(+62)81318534781" },
      { label: "monggo.idn@gmail.com", href: "mailto:monggo.idn@gmail.com" },
    ],
    Informations: [
      { label: "Terms & Conditions", link: "/terms-and-conditions" },
      { label: "FAQ", link: "/faqs" },
    ],
  }

  return (
    <footer className={classes.footer}>
      <Grid container justifyContent="space-between">
        <Grid item classes={{ root: classes.linkContainer }}>
          {/* categories */}
          <Grid container>
            {Object.keys(routes).map(category => (
              <Grid
                key={category}
                item
                container
                direction="column"
                classes={{ root: classes.linkColumn }}
              >
                <Grid item>
                  <Typography variant="h6" style={{ color: "white" }}>
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
        </Grid>
        {/* social media icons */}
        <Grid item>
          <Grid container direction="column" alignItems="center">
            {icons.map(icon => (
              <Grid item key={icon.id}>
                <IconButton
                  disableRipple
                  component="a"
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ margin: 0 }}
                >
                  {icon.name}
                </IconButton>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* copyright */}
      <Grid item>
        <Typography variant="h6" classes={{ root: classes.copyright }}>
          &copy;2021 MONGGOFITS
        </Typography>
      </Grid>
    </footer>
  )
}

export default Footer
