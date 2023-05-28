import React, { useState } from "react";
import Imput from "../../components/Imput/Imput";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Usuario/useAuth";
import styles from "./RegistroLojista.module.css";
import verificaEmail from "./verificaEmail";
import registrarLojista from "./registrarLojista";

const RegistroLojista = () => {
  
  let [msg, setMsg] = useState([]);
  let [emailOk, setEmailOk] = useState(false);
  let [error, setError] = useState("");
  let [cnpj, setCnpj] = useState("");
  let [nome, setNome] = useState("");
  let [endereco, setEndereco] = useState("");
  let [email, setEmail] = useState("");
  let [tel, setTel] = useState("");
  let [senha, setSenha] = useState("");
  
  const navigate = useNavigate();
  

 return (
    <div id={styles.registro_lojista_body}>
      <label>Cnpj:</label>
      <input type="text" name="cnpj" id="cnpj" placeholder="Digite o cnpj (XX.XXX.XXX/0001-XX)" value={cnpj} onChange={(e) => {setCnpj(e.target.value)}} />

      <label>Nome:</label>
      <input type="text" name="nome" id="nome" placeholder="Digite o nome da loja" value={nome} onChange={(e) => {setNome(e.target.value)}}/>

      <label>Endereço:</label>
      <input type="text" name="endereco" id="endereco" value={endereco} onChange={(e) => {setEndereco(e.target.value)}} />
      
      <label>E-mail</label>
      <div style={{color: msg[1]}}>{msg[0]}</div>
      <input type="email" name="email" id="email" placeholder="Digite o email da loja" value={email} onBlur={()=>{verificaEmail(email, setEmailOk, setMsg)}} onChange={(e) => {setEmail(e.target.value)}}/>
      
      <label>Telefone:</label>
      <input type="number" name="telefone" id="tel" placeholder="Digite o telefone" value={tel} onChange={(e) => {setTel(e.target.value)}}/>
      
      <label>Senha:</label>
      <input type="password" name="senha" id="senha1" placeholder="********" value={senha} onChange={(e) => {setSenha(e.target.value)}}/>
      
      <div style={{color: "#f00"}}>{error}</div>

      <button id="btn" onClick={() => {
        if(registrarLojista(emailOk, setError) == true){
          navigate("/login");
        }
        }}>Cadastrar</button>
    </div>
 )
};

export default RegistroLojista;