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
  useMediaQuery,
} from "@material-ui/core"
import { GoDetailsIcon } from "@components/Icons"
import { theme } from "@components/ui"
import Formatter from "@components/Formatter"
import Rating from "@components/Rating"

const useStyles = makeStyles(theme => ({
  background: {
    background: theme.palette.common.white,
    minHeight: "200rem",
    padding: "0 2.5rem",
    [theme.breakpoints.down("md")]: {
      minHeight: "240rem",
    },
  },
  featuredImage: {
    height: "20rem",
    width: "20rem",
    [theme.breakpoints.down("md")]: {
      height: "15rem",
      width: "15rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "12.5rem",
      width: "12.5rem",
    },
  },
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
    [theme.breakpoints.down("md")]: {
      height: "19.5rem",
      width: "21rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "17.5rem",
      width: "19rem",
    },
  },
  slide: {
    backgroundColor: theme.palette.primary.main,
    height: "20rem",
    width: "24.5rem",
    transition: "transform 0.25s ease",
    zIndex: 0,
    padding: "1rem",
    [theme.breakpoints.down("md")]: {
      height: "15rem",
      width: "19.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "14rem",
      width: "18.5rem",
    },
  },
  slideRight: {
    borderTopRightRadius: "5px",
    borderBottomRightRadius: "5px",
    transform: "translate(24.5rem, 0px)",
  },
  slideLeft: {
    borderTopLeftRadius: "5px",
    borderBottomLeftRadius: "5px",
    transform: "translate(-24.5rem, 0px)",
  },
  slideDown: {
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
    transform: "translate(0px, 17rem)",
    [theme.breakpoints.down("sm")]: {
      transform: "translate(0px, 15.5rem)",
    },
  },
  productContainer: {
    margin: "5rem 0",
  },
  chipContainer: {
    backgroundColor: theme.palette.common.white,
    ...theme.typography.body1,
    color: theme.palette.common.solidBlack,
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

  titleContainer: {
    textAlign: "center",
    alignSelf: "center",
  },
}))

const FeaturedProducts = () => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(null)
  const matchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))

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
      justifyContent={matchesMD ? "space-evenly" : "center"}
      classes={{ root: classes.background }}
    >
      <Grid item classes={{ root: classes.titleContainer }}>
        <Typography variant="h2">
          <span style={{ color: "#cf2f2f" }}>New</span> Arrivals
        </Typography>
        <Typography variant="body1">
          See and discover new products, choose yours
        </Typography>
      </Grid>
      {data.allStrapiProduct.edges.map(({ node }, i) => {
        const alignment = matchesMD
          ? "center"
          : i === 0 || i === 3
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
                  variant="body1"
                  style={{
                    color: theme.palette.primary.main,
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
                    !matchesMD && expanded === i && alignment === "flex-end",
                  [classes.slideRight]:
                    !matchesMD &&
                    expanded === i &&
                    (alignment === "flex-start" || alignment === "center"),
                  [classes.slideDown]: matchesMD && expanded === i,
                }),
              }}
            >
              <Grid item>
                <Typography
                  variant="h6"
                  style={{ color: theme.palette.common.white }}
                >
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
                  <Typography
                    variant="h6"
                    style={{ color: theme.palette.common.white }}
                  >
                    Details
                  </Typography>
                  <GoDetailsIcon />
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
