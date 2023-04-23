import React, { useState } from "react";
import Imput from "../../components/Imput/Imput";
import Button from "../../components/Button/Button";
import * as C from "./Login.module";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Usuario/useAuth";
import logar from "./logar";
import { useDispatch, connect } from "react-redux";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [tipoLogin, setTipoLogin] = useState("contas");

  function alternarTipo(){
    let btn = document.getElementById("btnAlt") 
    if(tipoLogin === "contas"){
      setTipoLogin("lojas")
      btn.innerHTML="Lojista"
    }else{
      setTipoLogin("contas")
      btn.innerHTML="Cliente"
    }
  }

  async function logar2(){
    const conta = await logar(email, senha, tipoLogin)
    console.log(conta)
    if(conta != null){
      if(tipoLogin == "contas"){
        dispatch({type: 'logarCliente', payload: conta})
        navigate("/")
      }else{
        dispatch({type: 'logarLojista', payload: conta})
        navigate("/")
      }
    }
  }

  return (
    <C.Container>
      <C.Label></C.Label>
      <C.Content>
        <Imput
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Imput
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <button id="btnAlt" type="button" onClick={alternarTipo}>Cliente</button>
        <C.labelError>{error}</C.labelError>
        <Button Text="Entrar" onClick={logar2} />
        <C.LabelLogin>
          Não tem uma conta?
          <C.Strong>
            <Link to="/registro">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelLogin>
      </C.Content>
    </C.Container>
  );
};

export default connect()(Login);