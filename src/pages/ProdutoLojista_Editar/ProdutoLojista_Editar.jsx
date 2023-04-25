import { useParams } from "react-router"
import { useNavigate } from "react-router-dom"
import editarProduto from "./editarProdudo"
import excluirProduto from "./excluirProduto"
import styles from "./ProdutoLojista_Editar.module.css"

export default function ProdutoLojista_Editar(){
    const navigate = useNavigate()
    let id = useParams()
    function editar(){
        editarProduto(id.produtoId)
        navigate("/lojista")
    }
    function excluir(){
        //alert("Confirmar exclusão")
        excluirProduto(id.produtoId)
        navigate("/lojista")
    }
    return(
    <div className={styles.produtoLojista_Editar_body}>
            <form className={styles.formulario}>
                <label htmlFor="img" className={styles.labels}>Imagem</label>
                <input type="file" name="" id="produto_img" />

                <label htmlFor="categoria" className={styles.labels}>Categoria</label>
                <input id="produto_categoria" type="text" className={styles.caixaTexto} />

                <label htmlFor="descricao" className={styles.labels}>Descrição</label>
                <input id="produto_descricao" type="text" className={styles.caixaTexto} />

                <label htmlFor="detalhes" className={styles.labels}>Detalhes</label>
                <input id="produto_detalhes" type="text" className={styles.caixaTexto} />

                <label htmlFor="preco" className={styles.labels}>Preço</label>
                <input id="produto_preco" type="text" className={styles.caixaTexto} />

            </form>
            <button onClick={editar} className={styles.botoes}>Salvar</button>
            <button onClick={excluir} className={styles.botoes}>Excluir</button>
    </div>
    )
}
