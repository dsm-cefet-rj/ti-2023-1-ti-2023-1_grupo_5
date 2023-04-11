import Header from "./pages/Header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./pages/Footer/Footer"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Registro from "./pages/RegistroUsuario/Registro"
import Carrinho from "./pages/Carrinho/Carrinho"
import CadastroProduto from "./pages/CadastroProduto/CadastroProduto"
import CadastroLoja from "./pages/CadastroLoja/CadastroLoja"
import Loja from "./pages/Loja/Loja"
import Produto_detalhes from "./pages/Produto/Produto_detalhes"
import Usuario from "./pages/Usuario/Usuario"
import Produtos from "./pages/Produtos/Produtos"
import Pesquisa from "./pages/Pesquisa/Pesquisa"
import {p as produtos, c as categorias} from "./components/Dados"

const App=()=> {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home produtos={produtos} categorias={categorias}/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/registro" element={<Registro/>} />
          <Route path="/carrinho" element={<Carrinho/>} />
          <Route path="/loja" element={<Loja/>} />
          <Route path="/cadastroLoja" element={<CadastroLoja/>} />
          <Route path="/cadastroProduto" element={<CadastroProduto/>} />
          <Route path="/produtos/:produtoId" element={<Produto_detalhes/>} />
          <Route path="/pesquisa" element={<Pesquisa/>} />
          <Route path="/usuario" element={<Usuario/>} />
          <Route path="/produtos" element={<Produtos/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
