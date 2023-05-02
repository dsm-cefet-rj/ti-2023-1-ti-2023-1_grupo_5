import { useParams } from "react-router"
import { useNavigate } from "react-router-dom"
import styles from "./ProdutoLojista_Editar.module.css"
import { connect, useDispatch, useSelector } from "react-redux"
import { alteraFirstFetched, editarProduto, excluirProduto } from "../../reduxFeatures/lojista"
import { useState } from "react"

const ProdutoLojista_Editar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const lojista = useSelector( state => state.lojista);
    let id = useParams().produtoId;
    let produto = lojista.produtos.filter( item => item.id === id);
    produto = Object.assign({}, produto[0]);

    function editar(){
        let categoria = document.getElementById("produto_categoria");
        let descricao = document.getElementById("produto_descricao");
        let detalhes = document.getElementById("produto_detalhes");
        let preco = document.getElementById("produto_preco");
    
        if(categoria.value != ""){produto.categoria = categoria.value}
        if(descricao.value != ""){produto.descricao = descricao.value}
        if(detalhes.value != ""){produto.detalhes = detalhes.value}
        if(preco.value != ""){produto.preco = preco.value}
        dispatch(editarProduto({produto: produto}));
        dispatch(alteraFirstFetched());
        navigate("/lojista");
    }
    function excluir(){
        dispatch(excluirProduto({id: produto.id}));
        dispatch(alteraFirstFetched());
        navigate("/lojista");
    }
    
    return(
    <div className={styles.produtoLojista_Editar_body}>
            <form className={styles.formulario}>
                <label htmlFor="img" className={styles.labels}>Imagem</label>
                <input type="file" name="" id="produto_img" />

                <label htmlFor="categoria" className={styles.labels}>Categoria</label>
                {/* <input id="produto_categoria" type="text" className={styles.caixaTexto} /> */}
                <select id="produto_categoria" className={styles.input_text} required>
                    <option value="">Selecione a categoria do produto</option>
                    <option value="placas graficas">Placas Gráficas</option>
                    <option value="armazenamento">Armazenamento</option>
                    <option value="memoria">Memória</option>
                    <option value="gabinete">Gabinete</option>
                    <option value="cooler">Cooler</option>
                    <option value="monitor">Monitor</option>
                    <option value="periferico">Periférico</option>
                    <option value="fonte">Fonte</option>
                    <option value="outro">Outro</option>
                </select>

                <label htmlFor="descricao" className={styles.labels}>Descrição</label>
                <input id="produto_descricao" type="text" className={styles.caixaTexto} />

                <label htmlFor="detalhes" className={styles.labels}>Detalhes</label>
                <input id="produto_detalhes" type="text" className={styles.caixaTexto} />

                <label htmlFor="preco" className={styles.labels}>Preço</label>
                <input id="produto_preco" type="number" className={styles.caixaTexto} />

            </form>
            <button onClick={editar} className={styles.botoes}>Salvar</button>
            <button onClick={excluir} className={styles.botoes}>Excluir</button>
    </div>
    )
}
export default connect()(ProdutoLojista_Editar)
