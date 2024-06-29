import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ButtonGoogle from "../../components/ButtonGoogle";
import Dot from "../../components/Dot";
import Image from "../../components/Image";
import Title from "../../components/Title";
import LoginWith from "../../components/LoginWith";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./style.css";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (!email || !senha) {
      toast.error("Preencha todos os campos!");
      return;
    }

    const res = signin(email, senha);

    if (res) {
    //   setError(res);
      return;
    }

    toast.success("Usuário logado com sucesso!");
    navigate("/home");
  };

  return (
    <div className="container">
      <ToastContainer />

      <div className="content">

        <Image />

        <div className="content-right">
          <Dot/>

          <div className="login">

            <Title/>

            <Input
              type="email"
              placeholder="Digite seu E-mail"
              value={email}
              onChange={(e) => [setEmail(e.target.value)]}
            />

            <Input
              type="password"
              placeholder="Digite sua Senha"
              value={senha}
              onChange={(e) => [setSenha(e.target.value)]}
            />

            <Button Text="Entrar" onClick={handleLogin} />
            <LoginWith />
            <ButtonGoogle Text="Google"/>

            <label>
              Não tem uma conta?

              <strong>
                <Link to="/signup">&nbsp;Registre-se</Link>
              </strong>

            </label>

          </div>
        </div>

      </div>

    </div>
  );
};

export default Signin;
