import React from "react";
import styles from "../css/Header.module.css";


import { Link } from "react-router-dom"


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
                    <nav className={styles.header_li}>
                        <li>
                           <a> <Link to="/login">Login</Link></a>
                        </li>
                        <li>
                           <a> <Link to="/carrinho">Carrinho</Link></a>
                        </li>
                        <li><a>dskdksikdi</a></li>
       
                    </nav>

                </ul>
            </div>
            <div id="mobile">

                <a href="../html/carrinho.html"><i className="fa-solid fa-cart-shopping"></i></a>
                <i id="bar" className="fas fa-outdent"></i>
            </div>
        </section>
    )
}