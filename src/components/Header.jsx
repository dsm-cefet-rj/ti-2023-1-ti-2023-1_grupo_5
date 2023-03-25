import React from "react";
import styles from "../css/Header.module.css";

export default function Header() {
    return (
        <section className={styles.cabecalho}>
            <a href="/"><img src={"../src/imagens/logo.png"} alt="logo" className={styles.logo}/></a>
    
            <div>
                <ul className={styles.navbar}>
                    <a href="#" className="close"><i className="fa fa-xmark"></i></a>
                    <form action="">
                        <input type="search" placeholder="Digite sua pesquisa aqui" className={styles.pesquisar}/>
                    </form>
                    <div className={styles.header_li}>
                        <li>
                            <a href="/login" >Login</a>
                        </li>
                        <li>
                            <a href="/categorias" >Categorias</a>
                        </li>
                        <li>
                            <a href="/carrinho" >Carrinho</a>
                        </li>
                        <li>
                            <a href="/contato" >Contato</a>
                        </li>
                    </div>

                </ul>
            </div>
            <div id="mobile">

                <a href="../html/carrinho.html"><i className="fa-solid fa-cart-shopping"></i></a>
                <i id="bar" className="fas fa-outdent"></i>
            </div>
        </section>
    )
}