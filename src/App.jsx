import Header from "./pages/Header/Header"
import { Outlet } from "react-router-dom"
import Footer from "./pages/Footer/Footer"
import { CarrinhoProvider } from "./context/CarrinhoContext"

import { AuthProvider } from "./context/auth"


const App=()=> {
  return (
    <div className="App">
      
      <AuthProvider>
      <CarrinhoProvider>
      <Header/>
      <Outlet/>
      <Footer/>
      </CarrinhoProvider>
      </AuthProvider>
      
    </div>
  )
}

export default App;
