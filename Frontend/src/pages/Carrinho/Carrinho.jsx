import styles from "./Carrinho.module.css"
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux"
import { retirarQuantidade, adicionarQuantidade, excluirProduto, processarCompra } from "../../reduxFeatures/conta";

const Carrinho = () => {
  const conta = useSelector((state) => state.conta);
  const tipo = conta.tipo;
  const carrinho = conta.carrinho;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let quantidadeTotal = 0;
  let total = 0;
  return (
    <div>
      {
        conta != null ?
        (
          <div>
            {/* <section className={styles.carrinho} class="section-p1"> */}
            <section className={styles.carrinho} >
              <div className={styles.content}>
                <table className={styles.carrinho_table}>
                  <thead className={styles.carrinhothead}>
                    <tr className={styles.carrinho_table1}>

                      <td className={styles.carrinho_tds} width="100px">Remover</td>
                      <td className={styles.carrinho_tds} width="150px">Imagem</td>
                      <td className={styles.carrinho_tds} width="250px">Produto</td>
                      <td className={styles.carrinho_tds} width="150px">Preço</td>
                      <td className={styles.carrinho_tds} width="150px">Quantidade</td>
                      <td className={styles.carrinho_tds} width="150px">Subtotal</td>

                    </tr>
                  </thead>
                  <tbody className={styles.carrinhotbody}>
                    {carrinho.map(prod => {
                      total += prod.produto.preco * prod.quantidade;
                      quantidadeTotal += prod.quantidade;
                      return (
                        <tr key={prod.produto._id} className={styles.carrinho_tbody_tr}>
                          <td className={styles.carrinho_tbody_td}><button type='submit' onClick={ () => {dispatch(excluirProduto({_id: prod.produto._id}))} }><FontAwesomeIcon icon={faXmark} size="2xl" style={{ color: "#ff1414", }} /></button></td>
                          <td className={styles.carrinho_tbody_td}><img src={prod.produto.img} className={styles.carrinho_table_img} alt={prod.produto.descricao} /></td>
                          <td className={styles.carrinho_tbody_td}>{prod.produto.descricao}</td>
                          <td className={styles.carrinho_tbody_td}>R$ {prod.produto.preco}</td>
                          <td className={styles.carrinho_tbody_td}>
                            <button onClick={ () => {dispatch(retirarQuantidade({_id: prod.produto._id}))} }>-</button>
                            {prod.quantidade}
                            <button onClick={ () => {dispatch(adicionarQuantidade({_id: prod.produto._id}))} }>+</button>
                          </td>
                          <td className={styles.carrinho_tbody_td}>R$ {prod.produto.preco * prod.quantidade}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </section>


            <section className={styles.addcarrinho}>
              <div className={styles.subtotal}>
                <h3 className={styles.subtotal_h3}>Total</h3>
                <table className={styles.subtotal_table}>
                  <thead>
                    <tr>
                      <td className={styles.subtotal_table_td}>Quantidade de itens</td>
                      <td className={styles.subtotal_table_td}><strong>Total</strong></td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={styles.subtotal_table_td}>{quantidadeTotal}</td>
                      <td className={styles.subtotal_table_td}><strong>R$ {total}</strong></td>
                    </tr>
                  </tbody>
                </table>
                <button className={styles.subtotal_botao_compra} onClick={() => {
                  let e;
                  e = dispatch(processarCompra())
                }}>Comprar</button>
              </div>
            </section>
          </div>

        ) : <>{navigate("/error")}</>
      }
    </div>


  )
}
export default connect()(Carrinho)