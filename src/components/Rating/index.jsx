import React from "react"
import blankStar from "../../assets/star_rate-24px 2.png"
import star from "../../assets/star_rate-24px 3.png"

const Rating = ({ rating }) => {
  let rate = JSON.parse(rating)
  let rest = Math.abs(rate - 5)

  let starArray = []
  let blankStarArray = []

  for (let i = 0; i < rate; i++) {
    starArray.push(<img src={star} alt='star' />)
  }
  for (let i = 0; i < rest; i++) {
    blankStarArray.push(<img src={blankStar} alt='blank star' />)
  }

  return (
    <>
      {starArray}
      {blankStarArray}
    </>
  )
}

export default Rating
