import React, { useState } from "react"
import clsx from "clsx"
import { useStaticQuery, graphql } from "gatsby"
import {
  Grid,
  Typography,
  IconButton,
  Button,
  Chip,
  makeStyles,
} from "@material-ui/core"
import { FaExternalLinkAlt } from "react-icons/fa"
import Rating from "./Rating"
import Formatter from "../Formatter"

const useStyles = makeStyles(theme => ({
  background: {
    background: "#fff",
    height: "200rem",
    padding: "0 2.5rem",
  },
  featuredImage: { height: "20rem", width: "20rem" },
  frame: {
    backgroundColor: "#fff",
    width: "24.5rem",
    height: "26rem",
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    boxSizing: "border-box",
    position: "absolute",
    "&:hover": {
      backgroundColor: "white",
    },
    zIndex: 1,
  },
  slide: {
    backgroundColor: theme.palette.secondary.main,
    height: "20rem",
    width: "24.5rem",
    transition: "transform 0.25s ease",
    zIndex: 0,
    padding: "1.5rem 2rem",
  },
  slideRight: {
    borderTopRightRadius: "5px",
    borderBottomRightRadius: "5px",
    transform: "translate(24.5rem, 0px)",
    boxShadow: theme.shadows[5],
  },
  slideLeft: {
    borderTopLeftRadius: "5px",
    borderBottomLeftRadius: "5px",
    transform: "translate(-24.5rem, 0px)",
    boxShadow: theme.shadows[5],
  },
  productContainer: {
    margin: "5rem 0",
  },
  chipContainer: {
    backgroundColor: theme.palette.secondary.dark,
    ...theme.typography.body1,
    color: theme.palette.common.white,
    fontSize: "1rem",
    padding: "0.5rem 0",
  },
  detailsContainer: {
    marginTop: "auto",
  },
  detailsButton: {
    padding: "0",
    textTransform: "none",
  },
  icon: {
    height: "1rem",
    width: "1rem",
    color: theme.palette.common.white,
  },
}))

const FeaturedProducts = () => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(null)

  const data = useStaticQuery(graphql`
    query getFeaturedProduct {
      allStrapiProduct(filter: { featured: { eq: true } }) {
        edges {
          node {
            name
            strapiId
            variants {
              price
              images {
                url
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      classes={{ root: classes.background }}
    >
      <Typography
        variant="h1"
        classes={{ root: classes.title }}
        style={{ alignSelf: "center" }}
      >
        <span style={{ color: "#cf2f2f" }}>New</span> Arrivals
      </Typography>
      {data.allStrapiProduct.edges.map(({ node }, i) => {
        const alignment =
          i === 0 || i === 3
            ? "flex-start"
            : i === 1 || i === 4
            ? "center"
            : "flex-end"
        return (
          <Grid
            item
            container
            justifyContent={alignment}
            key={node.strapiId}
            classes={{ root: classes.productContainer }}
            alignItems="center"
          >
            <IconButton
              disableRipple
              classes={{ root: classes.frame }}
              onClick={() =>
                expanded === i ? setExpanded(null) : setExpanded(i)
              }
            >
              <div>
                <img
                  src={node.variants[0].images[0].url}
                  alt={node.name}
                  className={classes.featuredImage}
                />
                <Typography
                  variant="h1"
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bolder",
                    color: "#3f3f3f",
                    padding: "1rem",
                  }}
                >
                  {node.name}
                </Typography>
              </div>
            </IconButton>

            <Grid
              container
              direction="column"
              classes={{
                root: clsx(classes.slide, {
                  [classes.slideLeft]:
                    expanded === i && alignment === "flex-end",
                  [classes.slideRight]:
                    expanded === i &&
                    (alignment === "flex-start" || alignment === "center"),
                }),
              }}
            >
              <Grid item>
                <Typography variant="h4" style={{ fontSize: "1.6rem" }}>
                  {node.name}
                </Typography>
              </Grid>
              <Grid item style={{ margin: "0.5rem 0" }}>
                <Rating number={0} />
              </Grid>
              <Grid item>
                <Chip
                  classes={{ root: classes.chipContainer }}
                  label={`IDR ${Formatter.format(`${node.variants[0].price}`)}`}
                />
              </Grid>
              <Grid item classes={{ root: classes.detailsContainer }}>
                <Button classes={{ root: classes.detailsButton }}>
                  <Typography variant="h5" style={{ marginRight: "0.5rem" }}>
                    Details
                  </Typography>
                  <FaExternalLinkAlt className={classes.icon} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default FeaturedProducts
