import React from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../hooks/usefetch/useFetch";
import Erro from "../../helper/erro/Erro";
import Loading from "../../helper/loading/Loading";
import styles from "./FeedPhotos.module.css";
import { PHOTOS_GET } from "../../api";

const FeedPhotos = ({ user, page, setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) setInfinite(false);
      //Se a resposta existir, for ok e o index do json for menor que o total(3), vai setar infinite para false
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Erro error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo} //Passo data.photo para ser usado no FeedPhotosItem
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
