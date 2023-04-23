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
            <form>
                <label htmlFor="img">Imagem</label>
                <input type="file" name="" id="produto_img" />

                <label htmlFor="categoria">Categoria</label>
                <input id="produto_categoria" type="text" />

                <label htmlFor="descricao">Descrição</label>
                <input id="produto_descricao" type="text" />

                <label htmlFor="detalhes">Detalhes</label>
                <input id="produto_detalhes" type="text" />

                <label htmlFor="preco">Preço</label>
                <input id="produto_preco" type="text" />

            </form>
            <button onClick={editar}>Salvar</button>
            <button onClick={excluir}>Excluir</button>
    </div>
    )
}
