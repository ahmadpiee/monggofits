import React from "react"
import { Grid, Typography, makeStyles, IconButton } from "@material-ui/core"
import { Link } from "gatsby"

import facebook from "../../images/fb.svg"
import instagram from "../../images/ig.svg"
import whatsapp from "../../images/wa.svg"

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.secondary.main,
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
  icon: {
    height: "1.6rem",
    width: "1.6rem",
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
    fontStyle: "italic",
    textAlign: "start",
    color: "#b8b8b8",
  },
}))

const Footer = () => {
  const classes = useStyles()

  const icons = [
    {
      name: whatsapp,
      alt: "whatsapp",
      link: "https://wa.me/6281296089640",
    },
    {
      name: instagram,
      alt: "instagram",
      link: "https://www.instagram.com/monggofits",
    },
    {
      name: facebook,
      alt: "facebook",
      link: "https://web.facebook.com/Monggofits-Store-103824892008168",
    },
  ]

  const routes = {
    Informations: [
      { label: "About Us", link: "/about-us" },
      { label: "Privacy Policy", link: "/privacy-policy" },
      { label: "Terms & Conditions", link: "/terms-conditions" },
    ],
    "Customer Service": [
      { label: "Contact Us", link: "/contact" },
      { label: "0813-1853-4781", href: "tel:(+62)81318534781" },
      { label: "monggo.idn@gmail.com", href: "mailto:monggo.idn@gmail.com" },
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
                  <Typography variant="h5">{category}</Typography>
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
              <Grid item key={icon.alt}>
                <IconButton
                  classes={{ root: classes.icon }}
                  disableRipple
                  component="a"
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={icon.name} alt={icon.alt} />
                </IconButton>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* copyright */}
      <Grid item>
        <Typography variant="h6" classes={{ root: classes.copyright }}>
          &copy;MONGGOFITS
        </Typography>
      </Grid>
    </footer>
  )
}

export default Footer
