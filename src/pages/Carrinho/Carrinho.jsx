import styles from "./Carrinho.module.css"
import { useCarrinho } from '../../context/CarrinhoContext'
import { faXmark} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormik } from "formik";


const Carrinho = ({produto}) => {
  const carrinho = useCarrinho()
  const remove = id => () => {
    carrinho.removeFromCarrinho(id)
  }
  const alterarQuantidade = (id) => (evt) => {
    carrinho.alterarQuantidade(id,Number(evt.target.value))
  }
  const itemsCount = Object.keys(carrinho.carrinho).reduce((prev,curr) =>{
    return prev + carrinho.carrinho[curr].quantidade
  },0)

  const total = Object.keys(carrinho.carrinho).reduce((prev,curr) =>{
    return prev + carrinho.carrinho[curr].quantidade * carrinho.carrinho[curr].Produto.preco
  },0)

 

  return (
<div>
<section className={styles.carrinho} class="section-p1">
        <table className={styles.carrinho_table} width="100%">
            <thead className={styles.carrinhothead}>
                <tr className={styles.carrinho_table1}>
                  
                    <td className={styles.carrinho_tds} width="100px">Remover</td>
                    <td className={styles.carrinho_tds} width="150px">Imagem</td>
                    <td className={styles.carrinho_tds} width="250px">Produto</td>
                    <td className={styles.carrinho_tds}width="150px">Preço</td>
                    <td className={styles.carrinho_tds} width="150px">Quantidade</td>
                    <td className={styles.carrinho_tds} width="150px">Subtotal</td>
                    
                </tr>
            </thead>
            <tbody>
              {Object.keys(carrinho.carrinho).map(key => {
                const {Produto, quantidade} = carrinho.carrinho[key]
                return(

              
                <tr key={key}>
                  
                    <td className={styles.carrinho_tbody_td}><button type='submit' onClick={remove(key)}><FontAwesomeIcon  icon={faXmark} size="2xl" style={{color: "#ff1414",}}/></button></td>
                    <td className={styles.carrinho_tbody_td}><img src={Produto.img} className={styles.carrinho_table_img} alt={Produto.descricao}/></td>
                    <td className={styles.carrinho_tbody_td}>{Produto.descricao}</td>
                    <td className={styles.carrinho_tbody_td}>R$ {Produto.preco}</td>
                    <td className={styles.carrinho_tbody_td}><input className={styles.input} type="number" 
                    defaultValue={quantidade} onBlur={alterarQuantidade(key)} width="70px"/></td>
                    <td className={styles.carrinho_tbody_td}>R$ {Produto.preco * quantidade}</td>
                </tr>
                )
                })}
            </tbody>
        </table>
    </section>


<section className={styles.addcarrinho} class="section-p1">
    <div className={styles.subtotal}>
        <h3 className={styles.subtotal_h3}>Total</h3>
        <table className={styles.subtotal_table}>
            <tr>
                <td className={styles.subtotal_table_td}>Quantidade de itens</td>
                <td className={styles.subtotal_table_td}>{itemsCount}</td>
            </tr>
            <tr>
                <td className={styles.subtotal_table_td}><strong>Total</strong></td>
                <td className={styles.subtotal_table_td}><strong>R$ {total}</strong></td>
            </tr>
        </table>
        <button className={styles.subtotal_botao_compra}>Comprar</button>
    </div>
</section>
</div>



  )
}

export default Carrinho