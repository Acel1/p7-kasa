import { Routes, Route, BrowserRouter } from "react-router-dom"

import Header from "./components/Header"
import Home from "./pages/Home"
import Logement from "./pages/Logement"
import About from "./pages/About"
import Error from "./pages/Error"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/logements/:id' element={<Logement />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
