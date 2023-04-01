import styles from "./Home.module.css"
import  "../../Components/Produto/Produto.module.css"

import Categoria from "../../components/Categoria/Categoria"
import Produto from "../../components/Produto/Produto"
import {p,c} from "../../components/Dados"


import { Link } from "react-router-dom"
import { useCarrinho } from "../../context/CarrinhoContext"

export default function Home() {
    const carrinho = useCarrinho()
    return (
        <body>
            <main>
                <section className={styles.novidades}>
                    <div className={styles.parte_cima}>
                        <h2 className={styles.titulos}>Novidades</h2>
                        <Link to="produtos"className={styles.ver_todos}>VER TODOS :</Link>
                    
                    </div>
                    
                    <div className={styles.produto}>
                    

                        {p.map((prod)=><Produto produto={prod} key={prod.id}/>)}
                               

                    </div>
                </section>
                <section>
                    <h2 className={styles.titulos}>Categorias</h2>
                    <div className={styles.categorias}>
                        <Categoria categoria={c[0]}/>
                        <Categoria categoria={c[1]}/>
                        <Categoria categoria={c[2]}/>
                        <Categoria categoria={c[3]}/>
                    </div>
                </section>
            </main>
        </body>
    )
}