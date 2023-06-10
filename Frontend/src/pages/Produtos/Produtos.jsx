import React, { useEffect, useState } from 'react';
import ProdutoListagem from './ProdutoListagem';
import retornaProdutos from './retornaProdutos';
import {p as prodts} from "../../components/Dados"
import styles from "./Produto.module.css"
export default function Produtos(){
  const [prod, setProd] = useState([])
  useEffect( () => {retornaProdutos(setProd)}, [])
  return (
    <div  className={styles.produto}>
      {
        prod.map( p => (<ProdutoListagem produto={p} key={p._id}/>) )
      }
    </div>
  )
}
