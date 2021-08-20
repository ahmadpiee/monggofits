import React from "react"
import { makeStyles } from "@material-ui/core"

// list icons (sort alphabetically)
import { AiOutlineShopping, AiOutlineMenu } from "react-icons/ai"
import { BiLinkExternal, BiUser } from "react-icons/bi"
import { BsGrid, BsListUl } from "react-icons/bs"
import { CgArrowLongRight } from "react-icons/cg"
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaRegStar,
  FaStarHalfAlt,
  FaStar,
} from "react-icons/fa"
import { FiSliders, FiFilter, FiChevronDown } from "react-icons/fi"
import { IoMdCloseCircle } from "react-icons/io"
import { IoSearchOutline } from "react-icons/io5"

const useStyles = makeStyles(theme => ({
  toolbarIcon: {
    height: "2.5rem",
    width: "2.5rem",
    color: theme.palette.common.white,
    "@media (max-width:1280px)": {
      height: "2.25rem",
      width: "2.25rem",
    },
    "@media (max-width:960px)": {
      height: "2rem",
      width: "2rem",
    },
    "@media (max-width:640px)": {
      height: "1.95rem",
      width: "1.95rem",
    },
    "@media (max-width:480px)": {
      height: "1.9rem",
      width: "1.9rem",
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
  viewSettingIcon: {
    height: "1.95rem",
    width: "1.95rem",
    color: theme.palette.common.white,
    "@media (max-width:1280px)": {
      height: "1.9rem",
      width: "1.9rem",
    },
    "@media (max-width:960px)": {
      height: "1.85rem",
      width: "1.85rem",
    },
    "@media (max-width:640px)": {
      height: "1.8rem",
      width: "1.8rem",
    },
    "@media (max-width:480px)": {
      height: "1.75rem",
      width: "1.75rem",
    },
  },
  accordionIcon: {
    height: "1.2rem",
    width: "1.2rem",
    color: theme.palette.primary.main,
  },
}))

// icons for toolbar
export const SortIcon = ({ style, color, size }) => {
  const classes = useStyles()
  return (
    <FiSliders
      className={classes.toolbarIcon}
      style={style}
      color={color}
      size={size}
    />
  )
}
export const FilterIcon = ({ style, color, size }) => {
  const classes = useStyles()
  return (
    <FiFilter
      className={classes.toolbarIcon}
      style={style}
      color={color}
      size={size}
    />
  )
}
export const CloseIcon = ({ style, color, size }) => {
  const classes = useStyles()
  return (
    <IoMdCloseCircle
      className={classes.toolbarIcon}
      style={style}
      color={color}
      size={size}
    />
  )
}

// general
export const GoDetailsIcon = ({ style, color, size }) => {
  const classes = useStyles()
  return (
    <BiLinkExternal
      className={classes.goDetailsIcon}
      style={style}
      color={color}
      size={size}
    />
  )
}
export const RightArrowIcon = ({ style, color, size }) => {
  const classes = useStyles()
  return (
    <CgArrowLongRight
      className={classes.rightArrowIcon}
      style={style}
      color={color}
      size={size}
    />
  )
}

// Social Media Icons
export const InstagramIcon = ({ style, color, size }) => {
  const classes = useStyles()
  return (
    <FaInstagram
      className={classes.socialMedia}
      style={style}
      color={color}
      size={size}
    />
  )
}
export const FacebookIcon = ({ style, color, size }) => {
  const classes = useStyles()
  return (
    <FaFacebook
      className={classes.socialMedia}
      style={style}
      color={color}
      size={size}
    />
  )
}
export const WhatsappIcon = ({ style, color, size }) => {
  const classes = useStyles()
  return (
    <FaWhatsapp
      className={classes.socialMedia}
      style={style}
      color={color}
      size={size}
    />
  )
}

// Header Icons
export const MenuBarIcon = ({ style, color, size }) => {
  const classes = useStyles()
  return (
    <AiOutlineMenu
      className={classes.headerIcons}
      style={style}
      color={color}
      size={size}
    />
  )
}
export const UserIcon = ({ style, color, size }) => {
  const classes = useStyles()
  return (
    <BiUser
      className={classes.headerIcons}
      style={style}
      color={color}
      size={size}
    />
  )
}
export const CartIcon = ({ style, color, size, className }) => {
  const classes = useStyles()
  return (
    <AiOutlineShopping
      className={className || classes.headerIcons}
      style={style}
      color={color}
      size={size}
    />
  )
}
export const SearchIcon = ({ style, color, size }) => {
  const classes = useStyles()
  return (
    <IoSearchOutline
      className={classes.headerIcons}
      style={style}
      color={color}
      size={size}
    />
  )
}

// Rating Icons
export const StarIconFill = ({ style, color, size }) => {
  const classes = useStyles()
  return (
    <FaStar
      className={classes.ratingIcons}
      style={style}
      color={color}
      size={size}
    />
  )
}
export const StarIconOutline = ({ style, color, size }) => {
  const classes = useStyles()
  return (
    <FaRegStar
      className={classes.ratingIcons}
      style={style}
      color={color}
      size={size}
    />
  )
}
export const StarIconHalf = ({ style, color, size }) => {
  const classes = useStyles()
  return (
    <FaStarHalfAlt
      className={classes.ratingIcons}
      style={style}
      color={color}
      size={size}
    />
  )
}

// view setting icon (toolbar)
export const GridIcon = ({ style, color, size }) => {
  const classes = useStyles()
  return (
    <BsGrid
      className={classes.viewSettingIcon}
      style={style}
      color={color}
      size={size}
    />
  )
}
export const ListIcon = ({ style, color, size }) => {
  const classes = useStyles()
  return (
    <BsListUl
      className={classes.viewSettingIcon}
      style={style}
      color={color}
      size={size}
    />
  )
}

// accordion
export const ExpandMoreIcon = ({ style, color, size }) => {
  const classes = useStyles()
  return (
    <FiChevronDown
      className={classes.accordionIcon}
      style={style}
      color={color}
      size={size}
    />
  )
}
