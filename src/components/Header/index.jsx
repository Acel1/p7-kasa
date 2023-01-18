import React from "react"
import logo from "../../assets/logo.svg"

const Header = () => {
  return (
    <div>
      <h1>
        <img src={logo} alt='' />
      </h1>
      <nav>
        <li>Accueil</li>
        <li>A Propos</li>
      </nav>
    </div>
  )
}

export default Header
