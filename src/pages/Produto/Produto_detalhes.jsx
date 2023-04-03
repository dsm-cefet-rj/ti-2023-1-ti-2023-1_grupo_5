import React from "react"
import styles from "./Produto.module.css"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";
import { p } from "../../components/Dados"
import {  useCarrinho } from "../../context/CarrinhoContext"


function Produto_detalhes({}){
    const {produtoId} = useParams()
    const thisProduto = p.find(prod => prod.id === produtoId)
    const carrinho = useCarrinho()
    const add = Produto => () => {
        carrinho.addCarrinho(Produto)
    }

    return (
        <div className={styles.produto_body}>
            <div className={styles.produto_container}>
                <div className={styles.campo_img}><img src={thisProduto.img}/></div>
                <div className={styles.campo_desc}>
                    <h1 className={styles.descricao}>{thisProduto.descricao}</h1>
                    <div className={styles.preco}>Preço: R${thisProduto.preco}</div>
                    <div className={styles.detalhes1}><strong>Informações Técnicas:</strong>{thisProduto.caracteristicas}</div>
                    <button className={styles.botao_comprar} onClick={add(thisProduto)}>Comprar</button>
                </div>
           
            
            </div>
            
        </div>

       
    )
}


export default Produto_detalhes
