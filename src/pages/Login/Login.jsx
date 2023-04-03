import React from 'react'
import styles from "./Login.module.css"
const Login = () => {
  return (
    <div className={styles.login_body}>
      <div className={styles.div_formulario}>
        <form action="" className={styles.formulario}>
        <label htmlFor="login" className={styles.login}>Login</label>
          <div className={styles.label_input}>
            
            <input type="text" placeholder='Usuário'/>
          </div>
          
          <div className={styles.label_input}>
            
            <input type="text" placeholder='Senha'/>
          </div>
            <button type='submit' className={styles.login_botao}>Entrar</button>
        </form>
      </div>
    </div>
  )
}

export default Login