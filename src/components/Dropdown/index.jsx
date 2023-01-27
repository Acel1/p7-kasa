import React from "react"
import { useState } from "react"

const Dropdown = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false)
  function click(e) {
    if (!isOpen) {
      e.currentTarget.parentNode.setAttribute("class", "dropdown dropdown--open")
      const content = e.currentTarget.nextElementSibling
      // content.style.height = `${content.scrollHeight}px`
      // content.style.height = "249px"
      setIsOpen(true)
    } else {
      e.currentTarget.parentNode.setAttribute("class", "dropdown")

      setIsOpen(false)
    }
  }

  return (
    <div className='dropdown'>
      <header className='dropdown__header' onClick={click}>
        <h3>{title}</h3>
        <i class='fa-solid fa-chevron-up'></i>
      </header>
      <div className='dropdown__content'>
        <p className='dropdown__text'>
          Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement
          parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied).
        </p>
      </div>
    </div>
  )
}

export default Dropdown
//   <ul className='dropdown__list'>
//       <li>aaaaaa</li>
//       <li>bbbbbb</li>
//       <li>cccccc</li>
//       <li>dddddd</li>
//     </ul>
