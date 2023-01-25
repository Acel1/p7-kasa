import React from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"

const Header = () => {
  return (
    <header className='header'>
      <h1 className='header__logo'>
        <img src={logo} alt='' />
      </h1>
      <nav className='header__navbar'>
        <Link className='header__link' to={"/"}>
          Accueil
        </Link>

        <Link className='header__link' to={"/more"}>
          A Propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
