import React from "react"
import { StarIconFill, StarIconOutline, StarIconHalf } from "@components/Icons"

const Rating = ({ number, style }) => {
  const diff = 5 - Math.ceil(number)

  return (
    <div style={style}>
      {[...Array(Math.floor(number))].map((e, i) => (
        <StarIconFill key={`${i}-full`} />
      ))}
      {number % 1 !== 0 ? <StarIconHalf /> : null}
      {[...Array(diff)].map((e, i) => (
        <StarIconOutline key={`${i}-empty`} />
      ))}
    </div>
  )
}

export default Rating
