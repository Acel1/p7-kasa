import React from "react"
import backwardArrow from "../../assets/arrow_back_ios-24px 1.png"
import forwardArrow from "../../assets/arrow_forward_ios-24px 1.png"
import { useState } from "react"

const Carousel = ({ logement }) => {
  let [current, setCurrent] = useState(0)

  let pictures = logement.pictures

  function backward() {
    setCurrent(current === 0 ? pictures.length - 1 : current - 1)
  }
  function forward() {
    setCurrent(current === pictures.length - 1 ? 0 : current + 1)
  }

  return (
    <div className='carousel'>
      <img className='carousel__arrow carousel__arrow--back' alt='' src={backwardArrow} onClick={backward} />
      <img className='carousel__arrow carousel__arrow--forw' alt='' src={forwardArrow} onClick={forward} />
      <ul id='carousel' className='carousel__list'>
        {pictures.map((picture, index) => {
          return (
            <div className={index === current ? "carousel__picture carousel__picture--active" : "carousel__picture carousel__picture--hidden"} key={index}>
              {index === current && <img src={picture} alt='' className='carousel__picture' />}
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default Carousel
