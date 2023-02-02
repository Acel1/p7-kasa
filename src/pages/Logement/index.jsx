import React from "react"
import logements from "../../datas/logements.json"
import Dropdown from "../../components/Dropdown"
import star from "../../assets/star_rate-24px 3.png"

import { useParams } from "react-router"

const Logement = () => {
  let { id } = useParams()

  let logement = logements.filter((logement) => logement.id === id)

  console.log(logement)
  return (
    <div className='logement'>
      <div className='logement__carousel'></div>
      <div className='logement__header'>
        <div>
          <h2 className='logement__title'>Cozy loft on the Canal Saint-Martin</h2>
          <h3 className='logement__city'>Paris, Île-de-France</h3>
          <ul className='logement__tags'>
            <li className='tag'>Cozy</li>
            <li className='tag'>Canal</li>
            <li className='tag'>Paris 10</li>
          </ul>
        </div>
        <div>
          <div className='logement__rate'>
            <img src={star} alt='' />
            <img src={star} alt='' />
            <img src={star} alt='' />
            <img src={star} alt='' />
            <img src={star} alt='' />
          </div>
          <div className='logement__host'>
            <p className='logement__host-name'>
              Alexandre <br /> Dumas
            </p>
            <img className='logement__pp' src='' alt='' />
          </div>
        </div>
      </div>
      <div className='logement__dropdowns'>
        <Dropdown title='Description' />
        <Dropdown title='Équipements' />
      </div>
    </div>
  )
}

export default Logement
