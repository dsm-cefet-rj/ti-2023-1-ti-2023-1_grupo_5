import React, { useEffect, useState } from "react";
import Imput from "../../components/Imput/Imput";
import Button from "../../components/Button/Button";
import * as C from "./Registro.module";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Usuario/useAuth";
import verificaEmail from "./verificaEmail";



const Registro = () => {
  const {cadastrado, setCadastrado} = useState(false); // para usar navigate
  const [msg, setMsg] = useState([]);// [msg, cor]
  const [emailChecado, setEmailChecado] = useState(false); //pra verificar se o email do input ja ta atualizado
  const [emailOk, setEmailOk] = useState(false); // se o email pode ser cadsastrado
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const { registro } = useAuth();
  const navigate = useNavigate();

  function registrar(){

    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }
    const novoUsuario = {
      email: email,
      senha: senha,
      produtos: []
    };

  }


  const handleRegistro = () => {
    if (!emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }else if(senha.length < 3){
      setError("Senha pequena demais");
      return;
    }
    //const res = registro(email, senha);
    
    let cliente = {
      email: email,
      senha: senha,
    }

    setEmailOk(false);
    //200 - ok
    const res = fetch("http://localhost:3000/clientes", {
    method: 'POST',    
    headers: {
            'Content-Type': 'application/json'
        },
    body: JSON.stringify(cliente)
    })

    if (!res) {
      setError(res);
      return;
    }else{
      alert("Usuário cadatrado com sucesso!");
      setCadastrado(true);
      navigate("/login");
    }
    
  };

  return (
    <C.Container>
      <C.Label></C.Label>
      <C.Content>
        <div style={{color: msg[1]}}>{msg[0]}</div>
        <Imput
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value); 
            setEmailChecado(false);
            setError("");   
          }}
          onBlur={() => {
            if(emailChecado == false){
              verificaEmail(email, setEmailOk, setMsg);
              setEmailChecado(true);
            }
          }}
        />
        <Imput
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => {setEmailConf(e.target.value); setError("")}}
        />
        <Imput
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Criar Conta" onClick={() => {
          if(emailOk == true){
            handleRegistro();
          }
          }} />
        <C.LabelLogin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/login">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelLogin>
      </C.Content>
    </C.Container>
  );
};

export default Registro;