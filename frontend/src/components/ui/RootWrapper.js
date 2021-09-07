import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import Theme from "./theme"
import { ApolloWrapper } from "apollo/ApolloWrapper"

const RootWrapper = ({ element }) => {
  return (
    <ThemeProvider theme={Theme}>
      <ApolloWrapper>{element}</ApolloWrapper>
    </ThemeProvider>
  )
}

export default RootWrapper
