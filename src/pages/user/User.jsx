import React from "react";
import UserHeader from "./userheader/UserHeader";
import { Route, Routes } from "react-router-dom";
import Feed from "../../components/feed/Feed";
import UserPhotoPost from "./userphotopost/UserPhotoPost";
import UserStats from "./userstats/UserStats";

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
