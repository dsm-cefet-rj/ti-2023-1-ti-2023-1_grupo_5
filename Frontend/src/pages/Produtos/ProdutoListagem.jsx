import styles from "./Produto.module.css"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { adicionarProduto } from "../../reduxFeatures/conta";
export default function ProdutoListagem( {produto} ) {
    const conta = useSelector((state) => state.conta);
    const dispatch = useDispatch();
    return (
        <div className={styles.parte_cima} >
        <div className={styles.novidades_produto}>
            
            <Link to={`/produtos/${produto._id}`}>
                <img src={produto.img} alt='' className={styles.novidade_produto_imagem} />
                <div className={styles.novidade_produto_descricao}>  {produto.descricao}</div>
            </Link>
            <div className={styles.preco}>R$ {produto.preco}</div>
            <div className={styles.novidade_produto_botao} 
                onClick={() => {if(conta != null){ dispatch( adicionarProduto({produto: produto}) )}}}>Comprar</div>
            </div>
        </div>
    )
}