import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/usefetch/useFetch";
import { PHOTO_GET } from "../../api";
import Erro from "../../helper/erro/Erro";
import Loading from "../../helper/loading/Loading";
import PhotoContent from "../../components/photo/PhotoContent";
import Head from "../../helper/head/Head";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Erro error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent single={true} data={data} />
        {/* Ele esta como true, logo quando estiver sendo chamado em outro componente, já vai estar como true tambem */}
      </section>
    );
};

export default Photo;
