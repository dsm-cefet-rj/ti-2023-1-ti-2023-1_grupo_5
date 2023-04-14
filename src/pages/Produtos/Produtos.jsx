import React, { useEffect, useState } from 'react';
import ProdutoListagem from './ProdutoListagem';
import retornaProdutos from './retornaProdutos';
import {p as prodts} from "../../components/Dados"
export default function Produtos(){
  const [prod, setProd] = useState([])
  useEffect( () => {retornaProdutos(setProd)}, [])
  return (
    <div>
      {
        prod.map( p => (<ProdutoListagem produto={p} key={p.id}/>) )
      }
    </div>
  )
}
