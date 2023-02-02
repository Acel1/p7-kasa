import React from "react"

import PropTypes from "prop-types"

const Thumb = ({ id, title, cover }) => {
  return (
    <div className='thumb' id={id}>
      <h3 className='thumb__title'>{title}</h3>
      <img className='thumb__image' src={cover} alt='' />
    </div>
  )
}

Thumb.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  cover: PropTypes.string,
  pictures: PropTypes.array,
  description: PropTypes.string,
  host: PropTypes.object,
  rating: PropTypes.number,
  location: PropTypes.string,
  equipments: PropTypes.array,
  tags: PropTypes.array,
}
export default Thumb
