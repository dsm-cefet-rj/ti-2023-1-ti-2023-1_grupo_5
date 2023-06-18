import React, { useState } from "react";
import Imput from "../../components/Imput/Imput";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Usuario/useAuth";
import styles from "./RegistroLojista.module.css";
import verificaEmail from "./verificaEmail";
//import registrarLojista from "./registrarLojista";
import {useDispatch} from "react-redux";
import { registrarLojista } from "../../reduxFeatures/lojista";

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
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function verificarCampos(emailOk, setError){
    let cnpj = document.getElementById("cnpj");
    let nome = document.getElementById("nome");
    let endereco = document.getElementById("endereco");
    let email = document.getElementById("email");
    let tel = document.getElementById("tel");
    let senha1 = document.getElementById("senha1");
    //XX.XXX.XXX/0001-XX length == 18
    if(cnpj.value.length != 18){
        //cnpj.focus();  n funcionou :(
        return setError("O cnpj deve ter o formato XX.XXX.XXX/0001-XX.");
    }
    if(nome.value.length < 3){
        return setError("O nome deve conter ao menos 3 caracteres.");
    }
    if(endereco.value.length < 4){
        return setError("O endereço deve conter ao menos 4 caracteres.");
    }
    if(tel.value.length != 8){
        return setError("O telefone deve conter ao menos 8 caracteres.");
    }
    if(senha1.value.length < 3){
        return setError("A senha deve conter ao menos 3 caracteres");
    }
    
    const lojista = {
        cnpj: cnpj.value,
        nome: nome.value,
        endereco: endereco.value,
        email: email.value,
        telefone: tel.value,
        senha: senha1.value
    }

    if(emailOk == true){
      //cadastrarLojista(lojista);
      dispatch(registrarLojista(lojista));
      setError("");
      alert("Usuário cadastrado.");
      return true;
    }else{
      alert("E-mail inválido.");
    }
}

function cadastrarLojista(lojista){
    fetch("http://localhost:3000/lojistas", {
    method: 'POST',    
    headers: {
            'Content-Type': 'application/json'
        },
    body: JSON.stringify(lojista)
    })
}
  

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
        if(verificarCampos(emailOk, setError) == true){
          navigate("/login");
        }
        }}>Cadastrar</button>
    </div>
 )
};

export default RegistroLojista;