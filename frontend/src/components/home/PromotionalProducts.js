import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Grid,
  Typography,
  Button,
  IconButton,
  makeStyles,
} from "@material-ui/core"
import Carousel from "react-spring-3d-carousel"
import clsx from "clsx"
import promoAdornment from "../../images/promoAdornment.png"
import { FaExternalLinkAlt } from "react-icons/fa"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    backgroundImage: `url(${promoAdornment})`,
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "60rem",
    padding: "20rem 10rem",
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
    borderRadius: 20,
    boxShadow: theme.shadows[15],
  },
  carouselContainer: {
    marginLeft: "20rem",
  },
  space: {
    margin: "0 15rem",
    marginBottom: "5rem",
  },
  more: {
    textTransform: "none",
  },

  icon: {
    width: "1.6rem",
    height: "1.6rem",
    marginLeft: "0.5rem",
    color: theme.palette.common.white,
  },
  descriptionContainer: {
    textAlign: "right",
  },
}))

const PromotionalProducts = () => {
  const classes = useStyles()
  const [selectedSlide, setSelectedSlide] = useState(0)

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
      justifyContent="space-between"
      classes={{ root: classes.mainContainer }}
    >
      <Grid item classes={{ root: classes.carouselContainer }}>
        <Carousel slides={slides} goToSlide={selectedSlide} />
      </Grid>
      <Grid item classes={{ root: classes.descriptionContainer }}>
        <Typography variant="h2" paragraph>
          {slides[selectedSlide].description}
        </Typography>
        <Button>
          <Typography variant="h4" classes={{ root: classes.more }}>
            more
          </Typography>
          <FaExternalLinkAlt className={classes.icon} />
        </Button>
      </Grid>
    </Grid>
  )
}

export default PromotionalProducts
