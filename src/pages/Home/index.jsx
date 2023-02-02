import React from "react"

import logements from "../../datas/logements.json"
import Thumb from "../../components/Thumb"

import background from "../../assets/IMG.png"
import { Link } from "react-router-dom"
// import { useParams } from "react-router"

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
        {logements.map((logement) => {
          let id = logement.id
          return (
            <Link to={`/logement/${id}`}>
              <Thumb title={logement.title} cover={logement.cover} />
            </Link>
          )
        })}
      </section>
    </div>
  )
}

export default Home
