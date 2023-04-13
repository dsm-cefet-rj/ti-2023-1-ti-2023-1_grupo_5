import styles from "./CadastroLoja.module.css"
export default function CadastroLoja(){
    function registrarLoja(){
        let cnpj = document.getElementById("cnpj")
        let nome = document.getElementById("nome")
        let endereco = document.getElementById("endereco")
        let email = document.getElementById("email")

        const novaLoja = {
            cnpj: cnpj.value,
            nome: nome.value,
            endereco: endereco.value,
            email: email.value
          };
          
          fetch('http://localhost:3000/lojas', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(novaLoja)
          })
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Erro ao adicionar a loja');
            }
          })
          .then(data => {
            console.log('Loja adicionada com sucesso:', data);
          })
          .catch(error => {
            console.error('Erro ao adicionar a loja:', error);
          });
    }
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