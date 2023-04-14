import styles from "./CadastroLoja.module.css"
import registrarLoja from "./registrarLoja.js"
export default function CadastroLoja(id_prop){
    return(
        <div className={styles.cadloja_body}>
            <div>
                <form action="" onSubmit={registrarLoja} className={styles.formulario}>
                    
                    <label htmlFor="cadastro_loja" className={styles.titulo}>Cadastrar loja</label>
                    <div className={styles.preencher}>
                        <div>
                            <input id="cnpj" type="text" placeholder="Cnpj" className={styles.cadloja_input_label}/>
                        </div>

                        <div>
                            <input id="nome" type="text" placeholder="Nome" className={styles.cadloja_input_label}/>
                        </div>

                        <div>
                            <input  id="endereco" type="text" placeholder="Endereço" className={styles.cadloja_input_label}/>
                        </div>

                        <div>
                            <input id="email" type="email" placeholder="E-mail" className={styles.cadloja_input_label}/>
                        </div>
                        <button type="" onClick={registrarLoja} className={styles.cadastro_loja_botao}>Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}