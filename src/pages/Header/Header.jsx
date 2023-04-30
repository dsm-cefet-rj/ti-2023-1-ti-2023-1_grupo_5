import React from "react";
import styles from "./Header.module.css";
import { useState } from "react"
import { faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { faPersonThroughWindow} from "@fortawesome/free-solid-svg-icons";
import { faOutdent} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import { connect, useDispatch, useSelector } from "react-redux";
import { sairContaCliente } from "../../reduxFeatures/conta";
import { sairContaLojista } from "../../reduxFeatures/lojista";


function Header() {
    const conta = useSelector( state => state.conta );
    const lojista = useSelector( state => state.lojista );
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    function handleMenuClick() {
        setIsMenuOpen(!isMenuOpen);
    }

    function handleLinkClick() {
        setIsMenuOpen(false);
    }

    let itemsCount;
    if(conta != null){
        if(conta.tipo === "cliente"){
            itemsCount = conta.carrinho.reduce((prev,curr) =>{
            return prev + curr.quantidade;
            },0)
        }
    }
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
                            lojista != null ?
                            (
                                <ul>
                                    <li className={styles.navigation_menu_li}>
                                        <Link to="/lojista" onClick={handleLinkClick}>Loja</Link>
                                    </li >
                                    <li className={styles.navigation_menu_li}><Link to="/" onClick={() => {dispatch(sairContaLojista()); navigate("/");}}><FontAwesomeIcon icon={faPersonThroughWindow} size="lg" style={{color: "#000000",}}/></Link></li>
                                </ul>
                            ) :
                            conta != null ? 
                            (
                                <ul>
                                    <li className={styles.navigation_menu_li}>
                                        <Link to="/carrinho" onClick={handleLinkClick}><FontAwesomeIcon  icon={faCartShopping} size="lg" style={{color: "#000000",}}/>
                                            {' '}{itemsCount > 0 && <span>({itemsCount})</span>}
                                        </Link>
                                    </li >
                                    <li className={styles.navigation_menu_li}><Link to="/" onClick={() => {dispatch(sairContaCliente()); navigate("/");}}><FontAwesomeIcon icon={faPersonThroughWindow} size="lg" style={{color: "#000000",}}/></Link></li>
                                </ul>
                                
                            ):
                            (
                                <li className={styles.navigation_menu_li}>
                                    <Link to="/login" onClick={handleLinkClick}>Login</Link>
                                </li>
                            )
                        }

                        <li className={styles.navigation_menu_li}>
                            <Link to="usuario" onClick={handleLinkClick}></Link></li>
                        </ul>
                        
                       </div> 
       
                    </nav>
                    
                </ul>
                </div>
            </div>
           
        </section>
    )
}

export default connect()(Header)