import React from "react";
import Input from "../../../utils/input/Input";
import Button from "../../../utils/button/Button";
import useForm from "../../../hooks/useform/UseForm";
import { USER_POST } from "../../../api";
import { UserContext } from "../../../UserContext";
import useFetch from "../../../hooks/usefetch/useFetch";
import Erro from "../../../helper/erro/Erro";
import Head from "../../../helper/head/Head";

const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");
  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function criarUsuario(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <Head title="Crie sua conta" />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={criarUsuario}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="username" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Erro error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
