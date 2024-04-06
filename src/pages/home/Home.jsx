import React from "react";
import Feed from "../../components/feed/Feed";
import Head from "../../helper/head/Head";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head
        title="Fotos"
        description="Home do site Dogs, com o feed de fotos"
      />
      <Feed />
    </section>
  );
};

export default Home;
