import { useParams } from "react-router-dom"

import logements from "../../datas/logements.json"
import Dropdown from "../../components/Dropdown"
import Carousel from "../../components/Carousel"

import Tags from "../../components/Tags"
import { Host } from "../../components/Host"
import Rating from "../../components/Rating"

const Logement = () => {
  const { id } = useParams()
  const logement = logements.find((e) => e.id === id)
  const { title, location, rating, host, equipments, description, tags } = logement

  return (
    <div className='logement'>
      <Carousel logement={logement} />
      <div className='logement__header'>
        <div>
          <h2 className='logement__title'>{title}</h2>
          <h3 className='logement__city'>{location}</h3>
          <ul className='logement__tags'>
            <Tags tags={tags} />
          </ul>
        </div>
        <div>
          <div className='logement__rate'>
            <Rating rating={rating} />
          </div>
          <div className='logement__host'>
            <Host host={host} />
          </div>
        </div>
      </div>
      <div className='logement__dropdowns'>
        <Dropdown title='Description' content={description} />
        <Dropdown title='Équipements' content={equipments} />
      </div>
    </div>
  )
}

export default Logement
