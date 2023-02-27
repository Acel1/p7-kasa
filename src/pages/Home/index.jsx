import { Link } from "react-router-dom"

import logements from "../../datas/logements.json"

import Thumb from "../../components/Thumb"
import Banner from "../../components/Banner"

import banner from "../../assets/banner-home.png"

const Home = () => {
  return (
    <div className='home'>
      <Banner banner={banner} title={<h2 className='banner__text'>Chez vous, partout et ailleurs</h2>} />
      <section className='home__section gallery'>
        {logements.map((logement) => {
          return (
            <div key={logement.id}>
              <Link to={`/logements/${logement.id}`}>
                <Thumb title={logement.title} cover={logement.cover} />
              </Link>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Home
