import Header from "./pages/Header/Header"
import { Outlet } from "react-router-dom"
import Footer from "./pages/Footer/Footer"
import { CarrinhoProvider } from "./context/CarrinhoContext"
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
