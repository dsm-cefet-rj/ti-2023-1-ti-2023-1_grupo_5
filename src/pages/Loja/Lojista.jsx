import styles from "./Lojista.module.css"
import ProdutoLojista from "../../components/ProdutoLojista/ProdutoLojista"
import { Link, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import retornaProdutos from "./retornaProdutos"
export default function Lojista() {
    const state = useSelector((state)=>state)
    let loja = {}
    let [prod, setProd] = useState([])

    if (state.conta != null) {

        loja = {
            id: state.conta.id,
            nome: state.conta.nome,
            endereco: state.conta.endereco,
            cnpj: state.conta.cnpj,
            telefone: state.conta.telefone,
            email: state.conta.email,
        }
        useEffect( () => {retornaProdutos(loja.id, setProd)})

        return (
            <div className={styles.loja}>
                <div className={styles.campo_info}>
                    <h1>{loja.nome}</h1>
                    <div>{loja.endereco}</div>
                    <div>{loja.cnpj}</div>
                    <div>{loja.telefone}</div>
                    <div>{loja.email}</div>
                </div>
                <h1>Produtos</h1>
                <Link to="/cadastroProduto">Cadastrar Produto</Link>
                {prod.length != 0 ? (
                    <div className={styles.campo_produtos}>
                        {prod.map((prod) => <ProdutoLojista produto={prod} key={prod.id} />)}
                    </div>
                ) : (<div>Não há produtos registrados</div>)}
            </div>
        )
    }else{
        return ( <Navigate to="/error"/> )
    }
}