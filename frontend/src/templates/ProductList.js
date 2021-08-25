// pageContext data all setup inside gatsby-browser.js, see the docs https://www.gatsbyjs.com/docs/creating-and-modifying-pages/
import React, { useState, useRef } from "react"
import { graphql } from "gatsby"
import { Grid, Fab, makeStyles } from "@material-ui/core"
import { Pagination } from "@material-ui/lab"

import { DynamicToolbar, ListOfProducts } from "@components/product-list"
import { Layout } from "@components/ui"
import { ChevronUp } from "@components/Icons"

const useStyles = makeStyles(theme => ({
  fab: {
    alignSelf: "flex-end",
    margin: "1rem",
    height: "3rem",
    width: "3rem",
  },
}))

const ProductList = ({
  pageContext: { filterOptions, name, description },
  data: {
    allStrapiProduct: { edges: products },
  },
}) => {
  const classes = useStyles()
  const [layout, setLayout] = useState("grid")
  const [page, setPage] = useState(1)
  const scrollRef = useRef(null)

  const scrollHandler = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" })
  }

  const productsPerPage = layout === "grid" ? 16 : 8
  var numVariants = 0
  products.map(product => (numVariants += product.node.variants.length))
  const numPages = Math.ceil(numVariants / productsPerPage)

  return (
    <Layout>
      <Grid container direction="column" alignItems="center">
        <div ref={scrollRef} />
        <DynamicToolbar
          filterOptions={filterOptions}
          name={name}
          description={description}
          layout={layout}
          setLayout={setLayout}
        />
        <ListOfProducts
          page={page}
          productsPerPage={productsPerPage}
          layout={layout}
          products={products}
        />
        <Pagination
          count={numPages}
          page={page}
          onChange={(e, newPage) => setPage(newPage)}
        />
        <Fab
          onClick={scrollHandler}
          color="primary"
          classes={{ root: classes.fab }}
        >
          <ChevronUp />
        </Fab>
      </Grid>
    </Layout>
  )
}

export default ProductList

export const query = graphql`
  query GetCategoryProducts($id: String!) {
    allStrapiProduct(filter: { category: { id: { eq: $id } } }) {
      edges {
        node {
          strapiId
          name
          category {
            name
          }
          variants {
            id
            color
            price
            size
            style
            images {
              url
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  }
`
