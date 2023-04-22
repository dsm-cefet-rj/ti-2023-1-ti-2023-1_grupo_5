import styles from "./Produto.module.css"
import { Link } from 'react-router-dom';
import { useCarrinho } from "../../context/CarrinhoContext"
export default function ProdutoListagem( {produto} ) {
    const carrinho = useCarrinho()
    const add = Produto => () => {
        carrinho.addCarrinho(Produto)
    }
    return (
        <div className={styles.parte_cima}>
        <div className={styles.novidades_produto}>
            
            <Link to={`/produtos/${produto.id}`}>
                <img src={produto.img} alt='' className={styles.novidade_produto_imagem} />
                <div className={styles.novidade_produto_descricao}>  {produto.descricao}</div>
            </Link>
            <div className={styles.preco}>R$ {produto.preco}</div>
            <div className={styles.novidade_produto_botao} onClick={add(produto)}>Comprar</div>
                </div>
        </div>
    )
}