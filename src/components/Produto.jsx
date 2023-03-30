import styles from "../css/Produto.module.css"
import { Link } from "react-router-dom"

import p from "./Dados"

import {  useCarrinho } from "../context/CarrinhoContext"





const Produto = ({produto}) => {
    const carrinho = useCarrinho()
    const add = Produto => () => {
        carrinho.addCarrinho(Produto)
    }
    return(
        <div className={styles.novidades_produto}>
            
            <a> <Link to="/ProdutoSimples" >
            <img src={produto.img} alt='' className={styles.novidade_produto_imagem} />
            <div className={styles.novidade_produto_descricao}>{produto.descricao}</div>
            <div className={styles.preco}>R$ {produto.preco}</div>
            <div className={styles.metodo_pagamento}>À vista no pix</div>

            </Link></a>
            <a>
                <button className={styles.novidade_produto_botao} onClick={add(produto)}>Comprar</button>
            </a>
        </div>
        
    )
}

export default Produto

{/*
export default function Produto(params) {
    const carrinho = useContext(CarrinhoContext)
    const add = Produto => () => {
        carrinho.addCarrinho(Produto)
    }
    return (
        <div className={styles.novidades_produto}>
            <pre>{JSON.stringify(carrinho, null,2)}</pre>
            <a> <Link to="/ProdutoSimples" >
            <img src={params.produto.img} alt={params.produto.tipo} className={styles.novidade_produto_imagem} />
            <div className={styles.novidade_produto_descricao}>{params.produto.descricao}</div>
            <div className={styles.preco}>R$ {params.produto.preco}</div>
            <div className={styles.metodo_pagamento}>À vista no pix</div>
            
            </Link></a>
            <a>
                <button className={styles.novidade_produto_botao} onClick={add(Produto)}>Comprar</button>
            </a>
        </div>
    )
}

*/}