import styles from "./LojistaInfo.module.css"
export default function LojistaInfo({ lojista , setEditando}){
    return (
        <div className={styles.campo_info}>
            <h1>Loja - {lojista.nome}</h1>
            <div>Endereço: {lojista.endereco}</div>
            <div>CNPJ: {lojista.cnpj}</div>
            <div>Telefone: {lojista.telefone}</div>
            <div>E-mail: {lojista.email}</div>
            <button onClick={() => setEditando(true)}>Editar</button>
        </div>
    )
} 