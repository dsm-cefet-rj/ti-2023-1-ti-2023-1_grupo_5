import styles from "./Produto.module.css"
import { Link } from "react-router-dom"
import { useSelector, connect, useDispatch } from "react-redux"
import { adicionarProduto } from "../../reduxFeatures/conta"

const Produto = ({produto}) => {
    const conta = useSelector((state) => state.conta);
    const dispatch = useDispatch();
    return(
        <div className={styles.novidades_produto}>
            <Link to={`/produtos/${produto._id}`}>
                <img src={produto.img} alt='' className={styles.novidade_produto_imagem} />
            </Link>
            <Link to={`/produtos/${produto._id}`}>
                <div className={styles.novidade_produto_descricao}>{produto.descricao}</div>
            </Link>
            <div className={styles.preco}>R$ {produto.preco}</div>
            <div className={styles.metodo_pagamento}>À vista no pix</div>  
            <button className={styles.novidade_produto_botao} onClick={() => {
                if(conta != null){ dispatch( adicionarProduto({produto: produto}) ) }
                }}>Comprar</button>
        </div>
        
    )
}

export default connect()(Produto)