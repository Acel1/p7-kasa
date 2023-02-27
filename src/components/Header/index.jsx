import React from "react"
import { Link, useLocation } from "react-router-dom"
import logo from "../../assets/logo.svg"

const Header = () => {
  const location = useLocation()
  return (
    <header className='header'>
      <Link to={"/"}>
        <h1 className='header__logo'>
          <img src={logo} alt='' />
        </h1>
      </Link>

      <nav className='header__navbar'>
        <Link className='header__link' to={"/"} style={location.pathname === "/" ? { textDecoration: "underline" } : null}>
          Accueil
        </Link>

        <Link className='header__link' to={"/about"} style={location.pathname === "/about" ? { textDecoration: "underline" } : null}>
          A Propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
