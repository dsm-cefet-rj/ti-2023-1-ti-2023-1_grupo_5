import React, { useState } from "react";
import Imput from "../../components/Imput/Imput";
import Button from "../../components/Button/Button";
import * as C from "./Registro.module";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Usuario/useAuth";

const Registro = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { registro } = useAuth();

  const handleRegistro = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = registro(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/login");
  };

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
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Imput
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Criar Conta" onClick={handleRegistro} />
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