import React from "react"
import { useState } from "react"

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)
  function click(e) {
    let hiddenContent = e.currentTarget.nextSibling
    if (!isOpen) {
      // e.currentTarget.parentNode.setAttribute("class", "dropdown dropdown--open")

      hiddenContent.style.height = `${hiddenContent.scrollHeight}px`
      setIsOpen(true)
    } else {
      // e.currentTarget.parentNode.setAttribute("class", "dropdown")
      hiddenContent.style.height = 0

      setIsOpen(false)
    }
  }

  return (
    <div className='dropdown'>
      <header className='dropdown__header' onClick={click}>
        <h3>{title}</h3>
        <i className='fa-solid fa-chevron-up'></i>
      </header>
      <div className='dropdown__content'>
        {Array.isArray(content) ? (
          <ul className='dropdown__list'>
            {content.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className='dropdown__text'>{content}</p>
        )}
      </div>
    </div>
  )
}

export default Dropdown
