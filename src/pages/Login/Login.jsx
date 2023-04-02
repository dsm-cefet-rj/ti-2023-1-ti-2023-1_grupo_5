import React from 'react'
import styles from "./Login.module.css"
const Login = () => {
  return (
    <div className={styles.login_body}>
      <div className={styles.div_formulario}>
        <form action="">
          <div className={styles.label_input}>
            <label htmlFor="nome">Nome:</label>
            <input type="text" />
          </div>

          <div className={styles.label_input}>
            <label htmlFor="senha">Senha:</label>
            <input type="text" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login