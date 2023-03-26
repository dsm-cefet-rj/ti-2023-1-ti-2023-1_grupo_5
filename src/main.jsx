import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Principal from './components/Principal'
import FormCadastroProduto from './components/FormCadastroProduto'

import Carrinho from './components/Carrinho';
import Login from './components/Login'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
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
     
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
