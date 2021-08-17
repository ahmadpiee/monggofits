import React from "react"
import { makeStyles } from "@material-ui/core"

// list icons
import { AiOutlineShopping, AiOutlineMenu } from "react-icons/ai"
import { BiSort, BiFilterAlt, BiLinkExternal, BiUser } from "react-icons/bi"
import { CgArrowLongRight } from "react-icons/cg"
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaRegStar,
  FaStarHalfAlt,
  FaStar,
} from "react-icons/fa"
import { IoMdCloseCircle } from "react-icons/io"
import { IoSearchOutline } from "react-icons/io5"

const useStyles = makeStyles(theme => ({
  toolbarIcon: {
    height: "2.25rem",
    width: "2.25rem",
    color: theme.palette.common.white,
    "@media (max-width:1280px)": {
      height: "2.1rem",
      width: "2.1rem",
    },
    "@media (max-width:960px)": {
      height: "1.9rem",
      width: "1.9rem",
    },
    "@media (max-width:640px)": {
      height: "1.8rem",
      width: "1.8rem",
    },
    "@media (max-width:480px)": {
      height: "1.7rem",
      width: "1.7rem",
    },
  },
  goDetailsIcon: {
    width: "1.5rem",
    height: "1.5rem",
    marginLeft: "0.5rem",
    color: theme.palette.common.white,
    [theme.breakpoints.down("md")]: {
      width: "1.25rem",
      height: "1.25rem",
      marginLeft: "0.2rem",
    },
  },
  rightArrowIcon: {
    width: "1.5rem",
    height: "1.5rem",
    marginLeft: "0.5rem",
    color: theme.palette.common.white,
    [theme.breakpoints.down("md")]: {
      width: "1.25rem",
      height: "1.25rem",
      marginLeft: "0.2rem",
    },
  },
  socialMedia: {
    height: "2rem",
    width: "2rem",
    color: theme.palette.common.white,
    [theme.breakpoints.down("md")]: {
      width: "1.75rem",
      height: "1.75rem",
    },
  },
  headerIcons: {
    height: "1.5rem",
    width: "1.5rem",
    color: theme.palette.common.solidBlack,
  },
  ratingIcons: {
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

// icons for toolbar
export const SortIcon = ({ style }) => {
  const classes = useStyles()
  return <BiSort className={classes.toolbarIcon} style={style} />
}
export const FilterIcon = ({ style }) => {
  const classes = useStyles()
  return <BiFilterAlt className={classes.toolbarIcon} style={style} />
}
export const CloseIcon = ({ style }) => {
  const classes = useStyles()
  return <IoMdCloseCircle className={classes.toolbarIcon} style={style} />
}

// general
export const GoDetailsIcon = ({ style }) => {
  const classes = useStyles()
  return <BiLinkExternal className={classes.goDetailsIcon} style={style} />
}
export const RightArrowIcon = ({ style }) => {
  const classes = useStyles()
  return <CgArrowLongRight className={classes.rightArrowIcon} style={style} />
}

// Social Media Icons
export const InstagramIcon = ({ style }) => {
  const classes = useStyles()
  return <FaInstagram className={classes.socialMedia} style={style} />
}
export const FacebookIcon = ({ style }) => {
  const classes = useStyles()
  return <FaFacebook className={classes.socialMedia} style={style} />
}
export const WhatsappIcon = ({ style }) => {
  const classes = useStyles()
  return <FaWhatsapp className={classes.socialMedia} style={style} />
}

// Header Icons
export const MenuBarIcon = ({ style }) => {
  const classes = useStyles()
  return <AiOutlineMenu className={classes.headerIcons} style={style} />
}
export const UserIcon = ({ style }) => {
  const classes = useStyles()
  return <BiUser className={classes.headerIcons} style={style} />
}
export const CartIcon = ({ style }) => {
  const classes = useStyles()
  return <AiOutlineShopping className={classes.headerIcons} style={style} />
}
export const SearchIcon = ({ style }) => {
  const classes = useStyles()
  return <IoSearchOutline className={classes.headerIcons} style={style} />
}

// Rating Icons
export const StarIconFill = ({ style }) => {
  const classes = useStyles()
  return <FaStar className={classes.ratingIcons} style={style} />
}
export const StarIconOutline = ({ style }) => {
  const classes = useStyles()
  return <FaRegStar className={classes.ratingIcons} style={style} />
}
export const StarIconHalf = ({ style }) => {
  const classes = useStyles()
  return <FaStarHalfAlt className={classes.ratingIcons} style={style} />
}
