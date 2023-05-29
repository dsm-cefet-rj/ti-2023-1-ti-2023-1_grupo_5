import { useState } from "react";
import styles from "./LojistaInfo_Editar.module.css"
import { useDispatch } from "react-redux";
import { editarDadosLojista } from "../../reduxFeatures/lojista";
export default function LojistaInfo_Editar({ lojista, setEditando }) {
    const dispatch = useDispatch();

    let [nome, setNome]        = useState(lojista.nome);
    let [endereco, setEndereco] = useState(lojista.endereco);
    let [telefone, setTelefone] = useState(lojista.telefone);

    function salvar() {

        let lojistaEditado = {
            nome:   nome,
            endereco: endereco,
            telefone: telefone,
        }

        dispatch(editarDadosLojista(lojistaEditado));
        setEditando(false);
    }
    return (
        <>
        <div className={styles.campo_info_editar}>

            <div className={styles.label}>
                <label htmlFor="cnpj">CNPJ:</label>
                <label htmlFor="email">E-mail: </label>
                <label htmlFor="loja">Loja: </label>
                <label htmlFor="endereco">Endereço: </label>
                <label htmlFor="telefone">Telefone: </label>
            </div>

            <div className={styles.input}>
                <input type="text"      id="cnpj"       value={lojista.cnpj}        style={{color: '#333'}}     readOnly/>
                <input type="email"     id="email"      value={lojista.email}       style={{color: '#333'}}     readOnly/>
                <input type="text"      id="nome"       value={nome}        onChange={(e) => {setNome(e.target.value)}}/>
                <input type="text"      id="endereco"   value={endereco}    onChange={(e) => {setEndereco(e.target.value)}}/>
                <input type="number"    id="telefone"   value={telefone}    onChange={(e) => {setTelefone(e.target.value)}}/>
            </div>

        </div>
        <button onClick={salvar}>Salvar</button>
        </>
    )
} 