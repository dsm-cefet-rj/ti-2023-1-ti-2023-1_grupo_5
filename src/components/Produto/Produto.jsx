import styles from "./Produto.module.css"
import { Link } from "react-router-dom"
import adicionarAoCarrinho from "./adicionarAoCarrinho"

//import p from "../components/Dados"
import { useCarrinho } from "../../context/CarrinhoContext"
import { useSelector, connect } from "react-redux"

const Produto = ({produto}) => {
    const carrinho = useCarrinho()
    const conta = useSelector((state) => state.conta)
    const tipoLogin = useSelector((state) => state.tipoLogin)
    
    const prod = produto
    function add(){
        if(conta != null && tipoLogin === "cliente"){
            carrinho.addCarrinho(prod)
            adicionarAoCarrinho(conta.id, prod)
        }
    }
    return(
        <div className={styles.novidades_produto}>
            <Link to={`/produtos/${produto.id}`}>
                <img src={produto.img} alt='' className={styles.novidade_produto_imagem} />
            </Link>
            <Link to={`/produtos/${produto.id}`}>
                <div className={styles.novidade_produto_descricao}>{produto.descricao}</div>
            </Link>
            <div className={styles.preco}>R$ {produto.preco}</div>
            <div className={styles.metodo_pagamento}>À vista no pix</div>
            
            <button className={styles.novidade_produto_botao} onClick={add}>Comprar</button>

        </div>
        
    )
}

export default connect()(Produto)