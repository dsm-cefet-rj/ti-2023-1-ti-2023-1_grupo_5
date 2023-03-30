import React from "react";
import styles from "../css/Header.module.css";

import {  useCarrinho } from "./CarrinhoContext";


import { Link } from "react-router-dom"


export default function Header() {
    const carrinho = useCarrinho()
  //  const itemsCount = Object.keys(carrinho.carrinho).length
  const itemsCount = Object.keys(carrinho.carrinho).reduce((prev,curr) =>{
    return prev + carrinho.carrinho[curr].quantidade
  },0)


    return (
        <section className={styles.cabecalho}>
            
            <Link to=""><img src={"../src/imagens/logo.png"} alt="logo" className={styles.logo}/></Link>
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
                           <a> <Link to="/carrinho">Carrinho {' '}{itemsCount > 0 && <span>({itemsCount})</span>}
                           </Link></a>
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