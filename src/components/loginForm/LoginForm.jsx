import React from "react";
import { Link, useFormAction } from "react-router-dom";
import Input from "../../utils/input/Input";
import Button from "../../utils/button/Button";
import UseForm from "../../hooks/useform/UseForm";

const LoginForm = () => {
  const username = UseForm(); // Colocando em uma variavel o hook, e por utilizar no handlesubmit
  const password = UseForm(); // Colocando em uma variavel o hook, e por utilizar no handlesubmit

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      // Se o username e password for true ele vai fazer o fetch
      fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
        // Faz uma requisição para a URL especificada
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Especifica o tipo de conteúdo da requisição como JSON
        },
        body: JSON.stringify(), //Corpo da requisição, convertendo o objeto { username, password } para uma string JSON
      })
        .then((response) => {
          // Manipulação da resposta da requisição
          console.log(response); // Exibe a resposta da requisição no console
          return response.json(); // Converte a resposta da requisição para JSON e retorna a promessa resultante
        })
        .then((json) => {
          // Manipulação dos dados JSON retornados pela promessa anterior
          console.log(json); // Exibe os dados JSON no console
        });
    }
  };

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />{" "}
        {/* Colocando todos os props do Hook no input */}
        <Input
          label="Senha"
          type="password"
          name="password"
          {...password}
        />{" "}
        {/* Colocando todos os props do Hook no input */}
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
