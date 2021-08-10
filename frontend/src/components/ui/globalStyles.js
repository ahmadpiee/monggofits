import { makeStyles } from "@material-ui/core"

export const HeaderStyles = makeStyles(theme => ({
  coloredIndicator: {
    backgroundColor: theme.palette.common.red1,
  },
  logoText: {
    color: theme.palette.common.red1,
  },
  tabs: {
    marginLeft: "auto",
    marginRight: "auto",
  },
}))
