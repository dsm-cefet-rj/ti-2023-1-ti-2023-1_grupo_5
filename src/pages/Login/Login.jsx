import React, { useState } from "react";
import Imput from "../../components/Imput/Imput";
import Button from "../../components/Button/Button";
import * as C from "./Login.module";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Usuario/useAuth";
import logar from "./logar";
import { useDispatch, connect } from "react-redux";

const Login = () => {
  //const { login } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  
  async function logar2(){
    const conta = await logar(email, senha)
    console.log(conta)
    if(conta != null){
      dispatch({type: 'logarCliente', payload: conta})
      navigate("/")
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