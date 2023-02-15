import { Link, useParams } from "react-router-dom"

import logements from "../../datas/logements.json"
import Dropdown from "../../components/Dropdown"
import Carousel from "../../components/Carousel"

import Error from "../Error"
import Tags from "../../components/Tags"
import { Host } from "../../components/Host"
import Rating from "../../components/Rating"

const Logement = () => {
  const { id } = useParams()

  const logement = logements.find((e) => e.id === id)

  return logement !== undefined ? (
    <div className='logement'>
      <Carousel logement={logement} />
      <div className='logement__header'>
        <div>
          <h2 className='logement__title'>{logement.title}</h2>
          <h3 className='logement__city'>{logement.location}</h3>
          <ul className='logement__tags'>
            <Tags tags={logement.tags} />
          </ul>
        </div>
        <div>
          <div className='logement__rate'>
            <Rating rating={logement.rating} />
          </div>
          <div className='logement__host'>
            <Host host={logement.host} />
          </div>
        </div>
      </div>
      <div className='logement__dropdowns'>
        <Dropdown title='Description' content={logement.description} />
        <Dropdown title='Équipements' content={logement.equipments} />
      </div>
    </div>
  ) : (
    <Error />
  )
}

export default Logement
