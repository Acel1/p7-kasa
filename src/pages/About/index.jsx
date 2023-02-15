import React from "react"
import Banner from "../../components/Banner"
import banner from "../../assets/banner-about.png"
import Dropdown from "../../components/Dropdown"
import { about } from "../../datas/about"

const About = () => {
  return (
    <div>
      <Banner banner={banner} />
      <section className='about__dropdowns'>
        <Dropdown title={"Fiabilité"} content={about.fiabilité} />
        <Dropdown title={"Respect"} content={about.respect} />
        <Dropdown title={"Service"} content={about.service} />
        <Dropdown title={"Responsabilité"} content={about.sécurité} />
      </section>
    </div>
  )
}

export default About
