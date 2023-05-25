import React, { useState } from "react";
import Imput from "../../components/Imput/Imput";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Usuario/useAuth";
import styles from "./RegistroLojista.module.css";
import verificaEmail from "./verificaEmail";
import registrarLojista from "./registrarLojista";

const RegistroLojista = () => {
  let [cnpj, setCnpj] = useState("");
  let [nome, setNome] = useState("");
  let [endereco, setEndereco] = useState("");
  let [email, setEmail] = useState("");
  let [tel, setTel] = useState("");
  let [senha, setSenha] = useState("");

  let [emailOk, setEmailOk] = useState(false);

 return (
    <div id={styles.registro_lojista_body}>
      <label>Cnpj:</label>
      <input type="text" name="cnpj" id="cnpj" placeholder="XX.XXX.XXX/0001-XX" value={cnpj} onChange={(e) => {setCnpj(e.target.value)}} />

      <label>Nome:</label>
      <input type="text" name="nome" id="nome" value={nome} onChange={(e) => {setNome(e.target.value)}}/>

      <label>Endereço:</label>
      <input type="text" name="endereco" id="endereco" value={endereco} onChange={(e) => {setEndereco(e.target.value)}} />
      
      <label>E-mail</label>
      <input type="email" name="email" id="email" value={email} onChange={(e) => {setEmail(e.target.value); verificaEmail(e.target.value, setEmailOk)}}/>
      
      <label>Telefone:</label>
      <input type="tel" name="telefone" id="tel" placeholder="99999999" value={tel} onChange={(e) => {setTel(e.target.value)}}/>
      
      <label>Senha:</label>
      <input type="password" name="senha" id="senha1" value={senha} onChange={(e) => {setSenha(e.target.value)}}/>
      
      <button id="btn" onClick={() => registrarLojista(emailOk)}>Cadastrar</button>
    </div>
 )
};

export default RegistroLojista;