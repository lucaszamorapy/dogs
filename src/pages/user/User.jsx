import React from "react";
import UserHeader from "./userheader/UserHeader";
import { Route, Routes } from "react-router-dom";
import Feed from "../../components/feed/Feed";
import UserPhotoPost from "./userphotopost/UserPhotoPost";
import UserStats from "./userstats/UserStats";
import { UserContext } from "../../UserContext";

const User = () => {
  const { data } = React.useContext(UserContext);
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
