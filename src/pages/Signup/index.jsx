import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Image from "../../components/Image";
import Dot from "../../components/Dot";
import Title from "../../components/Title";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./style.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email || !emailConf || !senha) {
      toast.error("Preencha todos os campos!");
      return;
    } else if (email !== emailConf) {
      toast.error("Os e-mails não são iguais!");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      toast.error(res);
      return;
    }

    toast.success("Usuário cadastrado com sucesso!");
    navigate("/");
  };

  return (
    <div className="container">
      <ToastContainer />

      <div className="content">
        <Image />

        <div className="content-right">
          <Dot/>

          <div className="content-signup">
            <div className="signup">
              <Title/>

              <Input
                type="email"
                placeholder="Digite seu E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                type="email"
                placeholder="Confirme seu E-mail"
                value={emailConf}
                onChange={(e) => setEmailConf(e.target.value)}
              />

              <Input
                type="password"
                placeholder="Digite sua Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />

              <Button Text="Inscrever-se" onClick={handleSignup} />

              <label>
                Já tem uma conta?
                <strong>
                  <Link to="/">&nbsp;Entre</Link>
                </strong>
              </label>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Signup;