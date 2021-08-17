import React from "react"
import { Grid, makeStyles } from "@material-ui/core"
import Layout from "@components/ui/Layout"
import DynamicToolbar from "@components/product-list/DynamicToolbar"

const useStyles = makeStyles(theme => ({}))

const ProductList = ({ pageContext }) => {
  const classes = useStyles()
  return (
    <Layout>
      <Grid container direction="column" alignItems="center">
        <DynamicToolbar filterOptions={pageContext.filterOptions} />
      </Grid>
    </Layout>
  )
}

export default ProductList
