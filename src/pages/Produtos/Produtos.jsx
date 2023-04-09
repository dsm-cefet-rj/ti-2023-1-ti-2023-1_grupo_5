import React from 'react';
import { p } from '../../components/Dados';
import { Link } from 'react-router-dom';
import styles from "./Produto.module.css"


const Produtos = () => {
  const produtos = p.map(produto => {
    return (

      <div className={styles.novidades_produto} key={produto.id}>
        <Link to={`/produtos/${produto.id}`}>
          <img src={produto.img} alt='' className={styles.novidade_produto_imagem} />
          <div className={styles.novidade_produto_descricao}>  {produto.descricao}</div>
        </Link>

        <div className={styles.preco}>R$ {produto.preco}</div>

        <div className={styles.novidade_produto_botao}>Comprar{produto.botao}</div>

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