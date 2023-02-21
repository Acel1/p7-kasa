import IndexRoute from "./pages/Routes"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='main'>
        <IndexRoute />
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
