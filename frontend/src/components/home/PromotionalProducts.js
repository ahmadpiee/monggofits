import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Grid,
  Typography,
  Button,
  IconButton,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core"
import Carousel from "react-spring-3d-carousel"
import clsx from "clsx"
import promoAdornment from "@images/promoAdornment.png"
import { GoDetailsIcon } from "@components/Icons"
import { theme } from "@components/ui"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    backgroundImage: `url(${promoAdornment})`,
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "60rem",
    padding: "20rem 10rem",
    [theme.breakpoints.down("xl")]: {
      padding: "17.5rem 7.5rem",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "8.5rem 5rem",
    },
    [theme.breakpoints.down("sm")]: {
      overflow: "hidden",
    },
  },
  productName: {
    color: "#fff",
  },
  iconButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  carouselImage: {
    height: "30rem",
    width: "25rem",
    backgroundColor: "#fff",
    borderRadius: 10,
    boxShadow: theme.shadows[10],
    [theme.breakpoints.down("sm")]: {
      height: "25rem",
      width: "20rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "18rem",
      width: "13rem",
    },
  },
  carouselContainer: {
    marginLeft: "20rem",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      height: "25rem",
    },
  },
  space: {
    margin: "0 15rem 5rem 15rem",
    [theme.breakpoints.down("sm")]: {
      margin: "0 10rem 5rem 10rem",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0 6.5rem 5rem 6.5rem",
    },
  },
  descriptionContainer: {
    textAlign: "right",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
}))

const PromotionalProducts = () => {
  const classes = useStyles()
  const [selectedSlide, setSelectedSlide] = useState(0)
  const mathcesMD = useMediaQuery(theme => theme.breakpoints.down("md"))

  const data = useStaticQuery(graphql`
    query GetPromo {
      allStrapiProduct(filter: { promo: { eq: true } }) {
        edges {
          node {
            name
            strapiId
            description
            variants {
              images {
                url
              }
            }
          }
        }
      }
    }
  `)

  var slides = []

  data.allStrapiProduct.edges.map(({ node }, i) =>
    slides.push({
      key: i,
      content: (
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <IconButton
              disableRipple
              onClick={() => setSelectedSlide(i)}
              classes={{
                root: clsx(classes.iconButton, {
                  [classes.space]: selectedSlide !== i,
                }),
              }}
            >
              <img
                src={node.variants[0].images[0].url}
                alt={`ggwp-${i}`}
                className={classes.carouselImage}
              />
            </IconButton>
          </Grid>
          <Grid item>
            {selectedSlide === i ? (
              <Typography variant="h1" classes={{ root: classes.productName }}>
                {node.name.split(" ")[0]}
              </Typography>
            ) : null}
          </Grid>
        </Grid>
      ),
      description: node.description,
    })
  )

  return (
    <Grid
      container
      alignItems="center"
      justifyContent={mathcesMD ? "space-around" : "space-between"}
      classes={{ root: classes.mainContainer }}
      direction={mathcesMD ? "column" : "row"}
    >
      <Grid item classes={{ root: classes.carouselContainer }}>
        <Carousel slides={slides} goToSlide={selectedSlide} />
      </Grid>
      <Grid item classes={{ root: classes.descriptionContainer }}>
        <Typography
          variant="h2"
          paragraph
          style={{ color: theme.palette.common.white }}
        >
          {slides[selectedSlide].description}
        </Typography>
        <Grid item>
          <Button>
            <Typography
              variant="h4"
              style={{ color: theme.palette.common.white }}
            >
              more
            </Typography>
            <GoDetailsIcon />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PromotionalProducts
