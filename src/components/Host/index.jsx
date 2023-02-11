import React from "react"

export const Host = ({ host }) => {
  return (
    <>
      <p className='logement__host-name'>{host.name}</p>
      {/* eslint-disable-next-line */}
      <img className='logement__pp' src={host.picture} alt='Host profile picture' />
    </>
  )
}
