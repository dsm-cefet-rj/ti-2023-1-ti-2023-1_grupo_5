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
import Loja from './pages/Loja/Loja';
import Produto from './pages/Produto/Produto';
import Pesquisa from './pages/Pesquisa/Pesquisa';
import Usuario from './pages/Usuario/Usuario';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "",
        element: <Home/>,
      },
     
      {
        path:"login",
        element:<Login/>,
      },
      
      {
        path:"carrinho",
        element:<Carrinho/>,
      },

      {
        path:"loja",
        element:<Loja/>,
      },  

      {
        path:"cadastroLoja",
        element:<CadastroLoja/>,
      },
      {
        path:"cadastroProduto",
        element:<CadastroProduto/>,
      },
      
      {
        path:"produto",
        element:<Produto/>,
      },
      
      {
        path:"pesquisa",
        element:<Pesquisa/>,
      },
      {
        path:"usuario",
        element:<Usuario/>,
      },
     
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
