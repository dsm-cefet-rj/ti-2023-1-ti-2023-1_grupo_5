import styles from "./Home.module.css"
import Categoria from "../../components/Categoria/Categoria"
import Produto from "../../components/Produto/Produto"
import { Link } from "react-router-dom"
import { useCarrinho } from "../../context/CarrinhoContext"

export default function Home({produtos, categorias}) {
    const carrinho = useCarrinho()
    return (
       
            <main>
                <section className={styles.novidades}>
                    <div className={styles.parte_cima}>
                        <h2 className={styles.titulos}>Novidades</h2>
                        <Link to="/produtos"className={styles.ver_todos}>VER TODOS :</Link>
                    
                    </div>
                    
                    <div className={styles.produto}>
                    

                    {produtos.map((prod)=><Produto produto={prod} key={prod.id}/>)}
                            

                </div>
            </section>
            <section>
                <h2 className={styles.titulos}>Categorias</h2>
                <div className={styles.categorias}>
                    <Categoria categoria={categorias[0]}/>
                    <Categoria categoria={categorias[1]}/>
                    <Categoria categoria={categorias[2]}/>
                    <Categoria categoria={categorias[3]}/>
                </div>
            </section>
        </main>
        
    )
}