import Home from "./components/Home"
import style from "./css/Header.module.css"
import Header from "./components/Header"
import { BrowserRouter, Outlet, Route } from "react-router-dom"
import Footer from "./components/Footer"
import { CarrinhoProvider } from "./components/CarrinhoContext"
function App() {
  return (
    <div className="App">
      <CarrinhoProvider>
      <Header/>
      <Outlet/>
      <Footer/>
      </CarrinhoProvider>
    </div>
  )
}

export default App
