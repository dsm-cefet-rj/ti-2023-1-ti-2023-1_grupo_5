import styles from "./Home.module.css"
import Categoria from "../../components/Categoria/Categoria"
import Produto from "../../components/Produto/Produto"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getProdutosNovidades } from "../../reduxFeatures/geral"
import { useEffect } from "react"

export default function Home() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.geral);
    const produtos2 = state.produtosNovidades;
    useEffect(() => {
        dispatch(getProdutosNovidades());
    }, []);

    let teste = () => {return (produtos2 == undefined || produtos2.length == 0)};
    return (
       
            <main>
                <section className={styles.novidades}>
                    <div className={styles.parte_cima}>
                        <h2 className={styles.titulos}>Novidades</h2>
                        <Link to="/produtos"className={styles.ver_todos}>VER TODOS :</Link>
                    
                    </div>
                    
                    <div className={styles.produto}>
                    
                    {
                    teste() ? (
                        <div>Não há produtos cadastrados.</div>
                    ) : 
                    (<>{produtos2.map((prod)=><Produto produto={prod} key={prod._id}/>)}</>)
                    }
                            

                    </div>
            </section>
            {/* <section>
                <h2 className={styles.titulos}>Categorias</h2>
                <div className={styles.categorias}>
                    <Categoria categoria={categorias[0]}/>
                    <Categoria categoria={categorias[1]}/>
                    <Categoria categoria={categorias[2]}/>
                    <Categoria categoria={categorias[3]}/>
                </div>
            </section> */}
        </main>
        
    )
}