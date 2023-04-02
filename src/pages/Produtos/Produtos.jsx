import React from 'react';
import { p } from '../../components/Dados';
import { Link } from 'react-router-dom';
import styles from "./Produto.module.css"


const Produtos = () => {
    const produtos = p.map(produto => {
        return (

            <div className={styles.novidades_produto}>
           
            <img src={produto.img} alt='' className={styles.novidade_produto_imagem} />
                
                  <div className={styles.novidade_produto_descricao}>  <Link to={`/produtos/${produto.id}`}>{produto.descricao}</Link></div>
                
                <div className={styles.preco}>R$ {produto.preco}</div>
                
            </div>
            
          );
    });
  return (
    <>
  
    {produtos}
    </>
  );
};

export default Produtos