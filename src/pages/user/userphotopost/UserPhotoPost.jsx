import React from "react";
import styles from "./UserPhotoPost.module.css";
import Input from "../../../utils/input/Input";
import Button from "../../../utils/button/Button";
import UseForm from "../../../hooks/useform/UseForm";
import useFetch from "../../../hooks/usefetch/useFetch";
import Erro from "../../../helper/erro/Erro";
import { PHOTO_POST } from "../../../api";
import { useNavigate } from "react-router-dom";
import Head from "../../../helper/head/Head";

const UserPhotoPost = () => {
  const nome = UseForm();
  const peso = UseForm("number");
  const idade = UseForm("number");
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.photo); // Adiciona a imagem ao FormData
    formData.append("nome", nome.value); // Adiciona o valor do campo 'nome' ao FormData
    formData.append("peso", peso.value); // Adiciona o valor do campo 'peso' ao FormData
    formData.append("idade", idade.value); // Adiciona o valor do campo 'idade' ao FormData

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token); // Obtém a URL e as opções de requisição para postagem de foto
    request(url, options); // Envia a requisição HTTP
  };

  const handleImgChange = ({ target }) => {
    // Define a função para lidar com a alteração da imagem selecionada
    setImg({
      preview: URL.createObjectURL(target.files[0]), // Cria um URL temporário para a pré-visualização da imagem
      photo: target.files[0], // Armazena a imagem selecionada
    });
  };

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Poste sua foto" />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="name" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        ></input>
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Erro error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
