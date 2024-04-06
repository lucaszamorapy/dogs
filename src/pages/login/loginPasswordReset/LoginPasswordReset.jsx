import React from "react";
import Input from "../../../utils/input/Input";
import Button from "../../../utils/button/Button";
import UseForm from "../../../hooks/useform/UseForm";
import useFetch from "../../../hooks/usefetch/useFetch";
import { PASSWORD_RESET } from "../../../api";
import Erro from "../../../helper/erro/Erro";
import { useNavigate } from "react-router-dom";
import Head from "../../../helper/head/Head";

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");
  const password = UseForm("");
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  };

  return (
    <section className="animeLeft">
      <Head title="Resete sua senha" />
      <h1 className="title">Resete sua senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Erro error={error} />
    </section>
  );
};

export default LoginPasswordReset;
