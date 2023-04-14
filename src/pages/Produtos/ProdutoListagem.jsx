import styles from "./Produto.module.css"
import { Link } from 'react-router-dom';
export default function ProdutoListagem( {produto} ) {
    return (
        <div className={styles.novidades_produto}>
            <Link to={`/produtos/${produto.id}`}>
                <img src={produto.img} alt='' className={styles.novidade_produto_imagem} />
                <div className={styles.novidade_produto_descricao}>  {produto.descricao}</div>
            </Link>
            <div className={styles.preco}>R$ {produto.preco}</div>
            <div className={styles.novidade_produto_botao}>Comprar</div>

        </div>
    )
}