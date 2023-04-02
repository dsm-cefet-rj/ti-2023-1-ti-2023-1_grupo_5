import styles from "./CadastroLoja.module.css"
export default function CadastroLoja(){
    return(
        <div className={styles.cadloja_body}>
            <div>
                <form action="">
                    <div className={styles.cadloja_input_label}>
                        <label htmlFor="cnpj">Cnpj:</label>
                        <input type="text" />
                    </div>

                    <div className={styles.cadloja_input_label}>
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" />
                    </div>

                    <div className={styles.cadloja_input_label}>
                        <label htmlFor="endereco">Endereço:</label>
                        <input type="text" />
                    </div>

                    <div className={styles.cadloja_input_label}>
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" />
                    </div>
                </form>
            </div>
        </div>
    )
}