import React from "react"
import { Routes, Route } from "react-router-dom"

import Home from "./Home"
import Logement from "./Logement"
import Header from "../components/Header"
import More from "./More"

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/more' element={<More />} />
        <Route path='/logement/:id' element={<Logement />} />
      </Routes>
    </div>
  )
}

export default App
