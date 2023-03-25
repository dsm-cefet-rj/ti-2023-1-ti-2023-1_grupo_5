import styles from "../css/Produto.module.css"

export default function Produto(params) {
    return (
        <div className={styles.novidades_produto}>
            <img src={params.produto.img} alt={params.produto.tipo} className={styles.novidade_produto_imagem} />
            <div className={styles.novidade_produto_descricao}>{params.produto.descricao}</div>
            <div className={styles.preco}>R$ {params.produto.preco}</div>
            <div className={styles.metodo_pagamento}>À vista no pix</div>
            <a href="../html/carrinho.html">
                <button className={styles.novidade_produto_botao}>Comprar</button>
            </a>
        </div>
    )
}