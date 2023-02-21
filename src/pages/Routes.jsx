import { Routes, Route } from "react-router-dom"

import Home from "./Home"
import Logement from "./Logement"
import About from "./About"
import Error from "./Error"

function IndexRoute() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/logements/:id' element={<Logement />} />
      <Route path='/*' element={<Error />} />
    </Routes>
  )
}

export default IndexRoute
