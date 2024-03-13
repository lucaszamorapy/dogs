import React from "react";
import { Link, useFormAction } from "react-router-dom";
import Input from "../../utils/input/Input";
import Button from "../../utils/button/Button";
import UseForm from "../../hooks/useform/UseForm";
import { TOKEN_POST, USER_GET } from "../../api";
import { UserContext } from "../../UserContext";

const LoginForm = () => {
  const username = UseForm();
  const password = UseForm();

  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
