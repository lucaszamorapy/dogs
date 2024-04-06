import React from "react";
import Input from "../../../utils/input/Input";
import Button from "../../../utils/button/Button";
import UseForm from "../../../hooks/useform/UseForm";
import useFetch from "../../../hooks/usefetch/useFetch";
import Erro from "../../../helper/erro/Erro";
import { PASSWORD_LOST } from "../../../api";
import Head from "../../../helper/head/Head";

const LoginPasswordLost = () => {
  const login = UseForm();
  const { data, loading, error, request } = useFetch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (login.validate());
    const { url, options } = PASSWORD_LOST({
      login: login.value,
      url: window.location.href.replace("perdeu", "resetar"),
    });
    const { json } = await request(url, options);
    console.log(json);
  };

  return (
    <section className="animeLeft">
      <Head title="Perdeu a senha" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            label={"Email / Usuário"}
            type="text"
            name="login"
            {...login}
          />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar email</Button>
          )}
        </form>
      )}
      <Erro error={error} />
    </section>
  );
};

export default LoginPasswordLost;
