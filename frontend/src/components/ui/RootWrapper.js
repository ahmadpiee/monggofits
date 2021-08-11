import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import Theme from "./theme"

const RootWrapper = ({ element }) => {
  return <ThemeProvider theme={Theme}>{element}</ThemeProvider>
}

export default RootWrapper
