import styles from "./CadastroProduto.module.css"
export default function CadastroProduto(){
    return(
        <main>
        <section className={styles.cadastro_produto}>
            <h1>Cadastro de Produto</h1>
            <div className={styles.form_box}>
                    <form action="">
                        <div className={styles.campo_form}>
                            <div>
                                <label for="Categoria">Categoria</label>
                                <select className={styles.input_text} required>
                                    <option value="">Escolha uma categoria</option>
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
                                <label for="Nome">Nome</label>
                                <input type="text" className={styles.input_text} required/>
                            </div>
                            <div>
                                <label for="Marca">Marca</label>
                                <input type="text" className={styles.input_text} required/>
                            </div>
                            <div>
                                <label for="Preco">Preco</label>
                                <input type="text" className={styles.input_text} />
                            </div>
                        </div>

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
                    </form>
            </div>
        </section>
    </main>
    )
}