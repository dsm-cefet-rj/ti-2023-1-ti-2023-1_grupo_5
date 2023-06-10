import React, { useEffect, useState } from 'react';
import ProdutoListagem from './ProdutoListagem';
import {p as prodts} from "../../components/Dados"
import styles from "./Produto.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { fetchProdutos } from '../../reduxFeatures/geral';
export default function Produtos(){
  const state = useSelector(state => state.geral);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProdutos());
  }, []);
  return (
    <div  className={styles.produto}>
      {
        state.produtos != null ?
        (
          <>{state.produtos.map( p => (<ProdutoListagem produto={p} key={p._id}/>) )}</>
        ) : 
        (
          <></>
        )

      }
      
    </div>
  )
}
