import React from "react"
import { Routes, Route } from "react-router-dom"

import Home from "./Home"
import Logement from "./Logement"
import Header from "../components/Header"

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/logement' element={<Logement />} />
      </Routes>
    </div>
  )
}

export default App
