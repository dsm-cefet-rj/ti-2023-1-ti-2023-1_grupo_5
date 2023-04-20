import React from "react";
import styles from "./Header.module.css";
import { useState } from "react"
import {  useCarrinho } from "../../context/CarrinhoContext";
import { faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { faPersonThroughWindow} from "@fortawesome/free-solid-svg-icons";
import { faOutdent} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";
import useAuth from "../Usuario/useAuth";


import { Link } from "react-router-dom"


export default function Header({tipoLogin}) {
   
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    function handleMenuClick() {
        setIsMenuOpen(!isMenuOpen);
    }
    
    function handleLinkClick() {
        setIsMenuOpen(false);
    }
/**
 * tipoLogin
 * null - nao realizou login
 * "cliente" - login como cliente
 * "lojista" - login como lojista
 */
    tipoLogin = null

//     const carrinho = useCarrinho()
//     //  const itemsCount = Object.keys(carrinho.carrinho).length
//     const itemsCount = Object.keys(carrinho.carrinho).reduce((prev,curr) =>{
//     return prev + carrinho.carrinho[curr].quantidade
//     },0)
//     const { sair } = useAuth();
//   const navigate = useNavigate();
 
 
    return (
        
        <section className={styles.cabecalho}>
            
            <Link to="" onClick={handleLinkClick}><img src={"../public/images/logo.png"} alt="logo" className={styles.logo}/></Link>
            <div>
                <button className={styles.hamburger} onClick={handleMenuClick}><FontAwesomeIcon  icon={faOutdent} size="lg" style={{color: "#000000",}}/></button>
                <div  className={styles.navigation_menu} >
                <ul className={styles.navbar}>
                    <nav className={styles.header_li}>
                    <div  className={styles.navigation_menu}>
                        <ul className={`${styles.navigation_menu_ul} ${isMenuOpen ? styles.open : ""}`}>
                        <form action="">
                        <input type="search" placeholder="Digite sua pesquisa aqui" className={styles.pesquisar}/>
                        </form>
                        {
                            tipoLogin == null ? (
                                <li className={styles.navigation_menu_li}>
                                    <Link to="/login" onClick={handleLinkClick}>Login</Link>
                                </li>
                            ):(
                                <li className={styles.navigation_menu_li}>
                                    <Link to="/carrinho" onClick={handleLinkClick}><FontAwesomeIcon  icon={faCartShopping} size="lg" style={{color: "#000000",}}/>
                                        {/* {' '}{itemsCount > 0 && <span>({itemsCount})</span>} */}
                                    </Link>
                                </li >
                            )
                        }
                        <li className={styles.navigation_menu_li}>
                            <Link to="usuario" onClick={handleLinkClick}></Link></li>
                            <li><Link to="" onClick={() => [sair(), navigate("/")]}><FontAwesomeIcon  icon={faPersonThroughWindow} size="lg" style={{color: "#000000",}}/></Link></li>
                        </ul>
                        
                       </div> 
       
                    </nav>
                    
                </ul>
                </div>
            </div>
           
        </section>
    )
}