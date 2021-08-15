import React from "react"
import { makeStyles } from "@material-ui/core"
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"

const useStyles = makeStyles(theme => ({
  icon: {
    height: "1.2rem",
    width: "1.2rem",
    color: theme.palette.common.yellow1,
    marginRight: "4px",
    "@media (max-width: 1280px)": {
      height: "1rem",
      width: "1rem",
      marginRight: "2px",
    },
  },
}))

const Rating = ({ number, style }) => {
  const diff = 5 - Math.ceil(number)
  const classes = useStyles()

  return (
    <div style={style}>
      {[...Array(Math.floor(number))].map((e, i) => (
        <FaStar className={classes.icon} key={`${i}-full`} />
      ))}
      {number % 1 !== 0 ? <FaStarHalfAlt className={classes.icon} /> : null}
      {[...Array(diff)].map((e, i) => (
        <FaRegStar className={classes.icon} key={`${i}-empty`} />
      ))}
    </div>
  )
}

export default Rating
