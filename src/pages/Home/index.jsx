import React from "react"

import Thumb from "../../components/Thumb"

import background from "../../assets/IMG.png"

const Home = () => {
  return (
    <div className='home'>
      <section className='home__banner banner'>
        <h2 className='banner__text'>Chez vous, partout et ailleurs</h2>
        <div className='banner__bg'>
          <img src={background} alt='bvb' />
        </div>
      </section>
      <section className='home__section gallery'>
        <Thumb />
        <Thumb />
        <Thumb />
        <Thumb />
        <Thumb />
        <Thumb />
      </section>
    </div>
  )
}

export default Home
