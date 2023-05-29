import { useNavigate } from "react-router-dom";
import styles from "./LojistaInfo.module.css"
import { deletarLojista } from "../../reduxFeatures/lojista";
import { useDispatch } from "react-redux";
export default function LojistaInfo({ lojista , setEditando}){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function deletar(){
        let confirm = window.confirm("Deseja confirmar a exclusão da loja?");
        if(confirm){
            dispatch(deletarLojista());
            alert("Loja e produtos excluídos.");
            navigate("/");
        }
    }
    return (
        <div className={styles.campo_info}>
            <h1>Loja - {lojista.nome}</h1>
            <div>Endereço: {lojista.endereco}</div>
            <div>CNPJ: {lojista.cnpj}</div>
            <div>Telefone: {lojista.telefone}</div>
            <div>E-mail: {lojista.email}</div>
            <div className={styles.campo_btn}>
                <button onClick={() => setEditando(true)}>Editar</button>
                <button className={styles.btn_exclusao} onClick={deletar}>deletar</button>
            </div>
        </div>
    )
} 