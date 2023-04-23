import styles from "./CadastroProduto.module.css"
import cadastrarProduto from "./cadastrarProduto.js"
import { useNavigate } from "react-router-dom"
import { connect, useSelector } from "react-redux"
import { useEffect } from "react"

 function CadastroProduto(){
    const navigate = useNavigate()
    const estado = useSelector( (state) => state )
    const tipoLogin = estado.tipoLogin
    function cadastrar(){
        const id_lojista = estado.conta.id 
        cadastrarProduto(id_lojista)
    }

    return(
        <main>
            {tipoLogin === "lojista" ?
             (
                <section className={styles.cadastro_produto}>
                    
                    <div className={styles.form_box}>
                            <form action="" className={styles.formulario_produto}>
                                <h1>Cadastro de Produto</h1>
                                <div className={styles.campo_form}>
                                    <div>
                                        <select id="categoria" className={styles.input_text} required>
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
                                    </div>
                                    <div>
                                        <input id="descricao" type="text" placeholder="Descricao" className={styles.input_text} required/>
                                    </div>
                                    <div>
                                        <input id="marca" type="text" placeholder="Marca" className={styles.input_text} required/>
                                    </div>
                                    <div>
                                        <input id="preco" type="text" placeholder="Preço" className={styles.input_text} />
                                    </div>
                                </div>
                                <div className={styles.flexivel}>
                                    <div className={styles.campo_desc}>
                                        <label htmlFor="detalhes">Detalhes</label>
                                        <textarea id="detalhes" name="detalhes" cols="40" rows="15"></textarea>
                                    </div>

                                    <div className={styles.campo_img}>
                                        <label htmlFor="images" className={styles.drop_container}>
                                            <span className={styles.drop_title}>Solte aqui o arquivo</span>
                                            ou
                                            <input id="img" type="file" className={styles.images} accept="image/*" required/>
                                        </label>
                                    </div>
                                </div>
                                <button onClick={cadastrar}>Cadastrar</button>
                            </form>
                    </div>
                </section>
            ):useEffect(()=>{navigate("/error")})}
    </main>
    )
}

export default connect()(CadastroProduto)