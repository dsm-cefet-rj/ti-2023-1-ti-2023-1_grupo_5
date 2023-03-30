import styles from "../css/Principal.module.css"
import  "../css/Produto.module.css"

import Categoria from "./Categoria"
import Produto from "./Produto"
import p from "./Dados"

import { Link } from "react-router-dom"
import { useCarrinho } from "../context/CarrinhoContext"
const c = [
    {
        nome: "Hardware",
        href: "#",
        img: "../src/imagens/categorias/hardware.webp",
        alt: "Hardware",
    },
    {
        nome: "Preiféricos",
        href: "#",
        img: "../src/imagens/categorias/mouse.jpg",
        alt: "Periféricos",
    },
    {
        nome: "",
        href: "#",
        img: "../src/imagens/categorias/games.jpg",
        alt: "Games",
    },
    {
        nome: "Computadores",
        href: "#",
        img: "../src/imagens/categorias/computador.jpg",
        alt: "Computador",
    },
]
export default function Principal() {
    const carrinho = useCarrinho()
    return (
        <body>
            <main>
                <section className={styles.novidades}>
                    <div className={styles.parte_cima}>
                        <h2 className={styles.titulos}>Novidades</h2>
                        <a className={styles.ver_todos} href="../VariosProdutos/Produtos.html">VER TODOS :</a>
                    
                    </div>
                    
                    <div className={styles.produto}>
                    

                              {p.map((prod)=><Produto produto={prod}/>)}
                               

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
            <prev>{JSON.stringify(carrinho.carrinho,null,2)}</prev>
            <script src="https://kit.fontawesome.com/ebb52b10e0.js" crossorigin="anonymous"></script>
            <script src="script.js"></script>
        </body>
    )
}