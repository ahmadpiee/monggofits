import React, { useState } from "react"
import { graphql } from "gatsby"
import { Grid } from "@material-ui/core"
import { Layout } from "@components/ui"
import { DynamicToolbar, ListOfProducts } from "@components/product-list"

// pageContext data all setup inside gatsby-browser.js

const ProductList = ({
  pageContext: { filterOptions, name, description },
  data: {
    allStrapiProduct: { edges: products },
  },
}) => {
  const [layout, setLayout] = useState("grid")

  return (
    <Layout>
      <Grid container direction="column" alignItems="center">
        <DynamicToolbar
          filterOptions={filterOptions}
          name={name}
          description={description}
          layout={layout}
          setLayout={setLayout}
        />
        <ListOfProducts layout={layout} products={products} />
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
          variants {
            id
            color
            price
            size
            style
            images {
              url
            }
          }
        }
      }
    }
  }
`
