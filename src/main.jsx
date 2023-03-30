import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Principal from './components/Principal'
import FormCadastroProduto from './components/FormCadastroProduto'
import ErrorPage from './components/ErrorPage'
import Carrinho from './components/Carrinho';
import Login from './components/Login'
import ProdutoSimples from './components/ProdutoSimples'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "",
        element: <Principal/>,
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
        path:"produtosimples",
        element:<ProdutoSimples/>,
      },
     
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
