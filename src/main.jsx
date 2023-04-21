import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styles from "./Global.module.css"
import Home from './pages/Home/Home';
import CadastroProduto from './pages/CadastroProduto/CadastroProduto';
import CadastroLoja from './pages/CadastroLoja/CadastroLoja';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Carrinho from './pages/Carrinho/Carrinho';
import Login from './pages/Login/Login';
import Produto from './pages/Produto/Produto_detalhes';
import Pesquisa from './pages/Pesquisa/Pesquisa';
import Usuario from './pages/Usuario/Usuario';
import Produto_detalhes from './pages/Produto/Produto_detalhes';
import Produtos from './pages/Produtos/Produtos';
import Teste from './pages/Carrinho/teste';
import { Fragment } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Registro from './pages/RegistroUsuario/Registro';
import useAuth from './pages/Usuario/useAuth';

const Private = ({Item}) => {
  const signed = useAuth();
  return signed >0 ? <Item/> :<Login/>;
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
