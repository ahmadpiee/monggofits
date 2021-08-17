import React from "react"
import { graphql } from "gatsby"
import { Grid, makeStyles } from "@material-ui/core"
import Layout from "@components/ui/Layout"
import DynamicToolbar from "@components/product-list/DynamicToolbar"

const useStyles = makeStyles(theme => ({}))

const ProductList = ({
  pageContext: { filterOptions, name, description },
  data,
}) => {
  const classes = useStyles()
  console.log(data)
  return (
    <Layout>
      <Grid container direction="column" alignItems="center">
        <DynamicToolbar
          filterOptions={filterOptions}
          name={name}
          description={description}
        />
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
