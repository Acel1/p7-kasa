import React from "react"
import { useState } from "react"

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)
  function click(e) {
    if (!isOpen) {
      e.currentTarget.parentNode.setAttribute("class", "dropdown dropdown--open")
      // const content = e.currentTarget.nextElementSibling
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
        <i className='fa-solid fa-chevron-up'></i>
      </header>
      <div className='dropdown__content'>
        {Array.isArray(content) ? (
          <ul className='dropdown__list'>
            {content.map((item) => (
              <li>{item}</li>
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
//   <ul className='dropdown__list'>
//       <li>aaaaaa</li>
//       <li>bbbbbb</li>
//       <li>cccccc</li>
//       <li>dddddd</li>
//     </ul>
