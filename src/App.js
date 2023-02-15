import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Home from "./pages/Home"
import Logement from "./pages/Logement"
import Header from "./components/Header"
import About from "./pages/About"
import Error from "./pages/Error"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
        <Route path='/about' element={<About />} />
        <Route path='/logements/:id' element={<Logement />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
