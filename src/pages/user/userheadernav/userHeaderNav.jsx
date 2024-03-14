import React from "react";
import { NavLink } from "react-router-dom";
import MinhasFotos from "../../../Assets/feed.svg";
import Estatisticas from "../../../Assets/estatisticas.svg";
import Adicionar from "../../../Assets/adicionar.svg";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(false);

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <img src={MinhasFotos} alt="Minhas Fotos" />
        {mobile && "Minhas Fotos"}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <img src={Estatisticas} alt="Estatísticas" />
        {mobile && "Estatísticas"}
      </NavLink>
      <NavLink to="/conta/postar">
        <img src={Adicionar} alt="Adicionar" />
        {mobile && "Adicionar Foto"}
      </NavLink>
    </nav>
  );
};

export default UserHeaderNav;
