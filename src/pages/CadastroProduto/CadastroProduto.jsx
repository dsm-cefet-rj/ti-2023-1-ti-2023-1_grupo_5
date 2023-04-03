import styles from "./CadastroProduto.module.css"
export default function CadastroProduto(){
    return(
        <main>
        <section className={styles.cadastro_produto}>
            
            <div className={styles.form_box}>
                    <form action="" className={styles.formulario_produto}>
                        <h1>Cadastro de Produto</h1>
                        <div className={styles.campo_form}>
                            <div>
                                <select className={styles.input_text} required>
                                    <option value="">Selecione a categoria do produto</option>
                                    <option value="placa grafica">Placas Gráfica</option>
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
                                <input type="text" placeholder="Nome" className={styles.input_text} required/>
                            </div>
                            <div>
                                <input type="text" placeholder="Marca" className={styles.input_text} required/>
                            </div>
                            <div>
                                <input type="text" placeholder="Preço" className={styles.input_text} />
                            </div>
                        </div>
                        <div className={styles.flexivel}>
                            <div className={styles.campo_desc}>
                                <label for="descricao">Descrição</label>
                                <textarea name="descricao" cols="40" rows="15"></textarea>
                            </div>

                            <div className={styles.campo_img}>
                                <label for="images" className={styles.drop_container}>
                                    <span className={styles.drop_title}>Solte aqui o arquivo</span>
                                    ou
                                    <input type="file" className={styles.images} accept="image/*" required/>
                                </label>
                            </div>
                        </div>
                    </form>
            </div>
        </section>
    </main>
    )
}