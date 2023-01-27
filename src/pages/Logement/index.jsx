import React from "react"
import Dropdown from "../../components/Dropdown"

const Logement = () => {
  return (
    <div className='logement'>
      <div className='logement__carousel'></div>
      <div className='logement__header'></div>
      <div className='logement__tag-rate'></div>
      <div className='logement__dropdowns'>
        <Dropdown title='Description' />
        <Dropdown title='Équipements' />
      </div>
    </div>
  )
}

export default Logement
