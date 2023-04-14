import React, { useEffect, useState } from "react"
import styles from "./Produto.module.css"
import retornaProduto from "./retornaProduto.js" 
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";
import { p } from "../../components/Dados"
import {  useCarrinho } from "../../context/CarrinhoContext"


function Produto_detalhes(){
    const {produtoId} = useParams()
    let [prod, setProd] = useState({});
    useEffect( ()=>{
        retornaProduto(produtoId, setProd)
    }, [])
    
    return (
         <div className={styles.produto_body}>
             <div className={styles.produto_container}>
                 <div className={styles.campo_img}><img src={prod.img}/></div>
                 <div className={styles.campo_desc}>
                     <h1 className={styles.descricao}>{prod.descricao}</h1>
                     <div className={styles.preco}>Preço: R${prod.preco}</div>
                     <div className={styles.detalhes1}><strong>Informações Técnicas:</strong>{prod.detalhes}</div>
                     <button className={styles.botao_comprar}  >Comprar</button>
                 </div>
           
            
             </div>
            
         </div>

       
    )
}


export default Produto_detalhes
