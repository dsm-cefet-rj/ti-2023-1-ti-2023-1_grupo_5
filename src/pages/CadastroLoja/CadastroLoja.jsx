import styles from "./CadastroLoja.module.css"
export default function CadastroLoja(){
    return(
        <div className={styles.cadloja_body}>
            <div>
                <form action="" className={styles.formulario}>
                    
                    <label htmlFor="cadastro_loja" className={styles.titulo}>Cadastrar loja</label>
                    <div className={styles.preencher}>
                        <div>
                            <input type="text" placeholder="Cnpj" className={styles.cadloja_input_label}/>
                        </div>

                        <div>
                            <input type="text" placeholder="Nome" className={styles.cadloja_input_label}/>
                        </div>

                        <div>
                            <input type="text" placeholder="Endereço" className={styles.cadloja_input_label}/>
                        </div>

                        <div>
                            <input type="email" placeholder="E-mail" className={styles.cadloja_input_label}/>
                        </div>
                        <button type="submit" className={styles.cadastro_loja_botao}>Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}