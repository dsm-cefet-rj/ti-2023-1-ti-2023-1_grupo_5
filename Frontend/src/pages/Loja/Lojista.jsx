import styles from "./Lojista.module.css"
import ProdutoLojista from "../../components/ProdutoLojista/ProdutoLojista"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { connect, useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { alteraFirstFetched, fetchProdutos } from "../../reduxFeatures/lojista";
function Lojista() {
    const lojista = useSelector( state => state.lojista );
    const navigate = useNavigate();
    const dispatch = useDispatch();
    if(lojista.firstFetched == false ){
        dispatch(fetchProdutos({_id: lojista._id}))
        dispatch(alteraFirstFetched());
        
    }
    return (
        <>
        {
            lojista != null ? (
                <div className={styles.loja}>
                <div className={styles.campo_info}>
                    <h1>Loja - {lojista.nome}</h1>
                    <div>Endereço: {lojista.endereco}</div>
                    <div>CNPJ: {lojista.cnpj}</div>
                    <div>Telefone: {lojista.telefone}</div>
                    <div>E-mail: {lojista.email}</div>
                </div>
                <h1>Produtos</h1>
                <Link to="/cadastroProduto"><h2 className={styles.botaoCadastro}>Cadastrar Produto</h2></Link>
                {lojista.produtos.length != 0 ? (
                    <div className={styles.campo_produtos}>
                        {lojista.produtos.map((prod) => <ProdutoLojista produto={prod} key={prod.id}/>)}
                    </div>
                ) : (<div>Não há produtos registrados</div>)}
                </div>
            ) : <>{useEffect(() => {navigate("/error")}, lojista)}</>
        }
        </>
        
    )
}
export default connect()(Lojista)