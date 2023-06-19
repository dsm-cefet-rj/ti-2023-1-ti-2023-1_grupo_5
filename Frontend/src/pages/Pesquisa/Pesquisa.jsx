import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { fetchProdutos } from "../../reduxFeatures/geral";
import Produto from "../../components/Produto/Produto";
import styles from "./Pesquisa.module.css"

export default function Pesquisa() {
    const state = useSelector(state => state.geral);
    const queryResponse = state.queryResponse;
    let query = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProdutos(query.search));
    }, []);

    let search = query.search;
    let produtos2 = state.produtos;
    let qtd = 0;
    let teste = () => {return (produtos2 != undefined && produtos2.length > 0)}

    if(teste()){
        qtd = produtos2.length;
    }

    search = search.replaceAll("%20", " ");
    search = search.replaceAll("?q=", "");
    
    return (
        <div>
            <div>
                <div className={styles.encontrados}>{qtd} Resultados encontrados com a descrição "{search}".</div>
            </div>
            {
                teste() && (<div className={styles.div_prod}>{produtos2.map((prod)=><Produto produto={prod} key={prod._id}/>)}</div>)
            }
        </div>
    )
}