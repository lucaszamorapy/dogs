import React from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../hooks/usefetch/useFetch";
import Erro from "../../helper/erro/Erro";
import Loading from "../../helper/loading/Loading";
import styles from "./FeedPhotos.module.css";
import { PHOTOS_GET } from "../../api";

const FeedPhotos = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = request(url, options); //Fazendo o fetch da url e options
      console.log(json);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Erro error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <div>
        <ul className={`${styles.feed} animeLeft`}>
          {data.map((photo) => (
            <FeedPhotosItem key={photo.id} photo={photo} />
          ))}
        </ul>
      </div>
    );
  else return null;
};

export default FeedPhotos;
