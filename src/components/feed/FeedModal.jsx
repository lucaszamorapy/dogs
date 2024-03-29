import React from "react";
import styles from "./FeedModal.module.css";
import useFetch from "../../hooks/usefetch/useFetch";
import { PHOTO_GET } from "../../api";
import Erro from "../../helper/erro/Erro";
import Loading from "../../helper/loading/Loading";
import PhotoContent from "../photo/PhotoContent";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  };

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Erro error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
