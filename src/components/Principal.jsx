import styles from "../css/Principal.module.css"
import Categoria from "./Categoria"
import Produto from "./Produto"
const p = [
    {
        img: "../src/imagens/produtos/produto-gabinete.webp",
        tipo: "Gabinete",
        descricao: "Gabinete Gamer Redragon Brawn, Mid Tower, Vidro Temperado, Black, Sem fonte, Sem Fan, GC-500",
        preco: 349.99,
    },
    {
        img: "../src/imagens/produtos/produto-placa mae.webp",
        tipo: "Placa Mãe",
        descricao: "Placa Mãe Biostar B560MX-E PRO, Chipset B560, Intel LGA 1200, mATX, DDR4",
        preco: 559.99,
    },
    {
        img: "../src/imagens/produtos/produto-processador.jpg",
        tipo: "Processador",
        descricao: "Processador AMD Ryzen 5 4600G 3.7GHz (4.2GHz Turbo), 6-Cores 12-Threads, Cooler Wraith Stealth, AM4, 100-100000147BOX",
        preco: 489.99,
    },
    {
        img: "../src/imagens/produtos/produto-monitor.jpg",
        tipo: "Monitor",
        descricao: "Monitor Gamer Samsung T350, 22 pol, Full HD, IPS, HDMI/VGA, LF22T350FHLMZD",
        preco: 899.99,
    }
]
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
    return (
        <body>
            <main>
                <section className={styles.novidades}>
                    <div className={styles.parte_cima}>
                        <h2 className={styles.titulos}>Novidades</h2>
                        <a className={styles.ver_todos} href="../VariosProdutos/Produtos.html">VER TODOS :</a>
                    </div>
                    <div className={styles.produto}>
                        <Produto produto={p[0]}/>
                        <Produto produto={p[1]}/>
                        <Produto produto={p[2]}/>
                        <Produto produto={p[3]}/>
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
            <script src="https://kit.fontawesome.com/ebb52b10e0.js" crossorigin="anonymous"></script>
            <script src="script.js"></script>
        </body>
    )
}