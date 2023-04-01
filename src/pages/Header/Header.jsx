import React from "react";
import styles from "./Header.module.css";

import {  useCarrinho } from "../../context/CarrinhoContext";


import { Link } from "react-router-dom"


export default function Header() {
    const carrinho = useCarrinho()
  //  const itemsCount = Object.keys(carrinho.carrinho).length
  const itemsCount = Object.keys(carrinho.carrinho).reduce((prev,curr) =>{
    return prev + carrinho.carrinho[curr].quantidade
  },0)


    return (
        <section className={styles.cabecalho}>
            
            <Link to=""><img src={"../public/images/logo.png"} alt="logo" className={styles.logo}/></Link>
            <div>
                <ul className={styles.navbar}>
                    <form action="">
                        <input type="search" placeholder="Digite sua pesquisa aqui" className={styles.pesquisar}/>
                    </form>
                    <nav className={styles.header_li}>
                        <li>
                           <Link to="/login">Login</Link>
                        </li>
                        <li>
                           <Link to="/carrinho">
                                Carrinho {' '}{itemsCount > 0 && <span>({itemsCount})</span>}
                           </Link>
                        </li>
                        <li><Link to="usuario">dskdksikdi</Link></li>
       
                    </nav>

                </ul>
            </div>
        </section>
    )
}