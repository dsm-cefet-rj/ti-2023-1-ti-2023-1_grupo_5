import Home from "./components/Home"
import style from "./css/Header.module.css"
import Header from "./components/Header"
import { BrowserRouter, Outlet, Route } from "react-router-dom"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
