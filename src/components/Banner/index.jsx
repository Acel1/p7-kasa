import React from "react"

const Banner = ({ banner, title }) => {
  return (
    <div className='home__banner banner'>
      {title}
      <div className='banner__bg'>
        <img src={banner} alt='bvb' />
      </div>
    </div>
  )
}

export default Banner
