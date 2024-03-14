import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import MinhasFotos from "../../../Assets/feed.svg";
import Estatisticas from "../../../Assets/estatisticas.svg";
import Adicionar from "../../../Assets/adicionar.svg";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../../hooks/usemedia/useMedia";

const UserHeaderNav = () => {
  const mobile = useMedia("(max-width: 40rem)"); //Verificar se está como true ou false
  const [menuOpen, setMenuOpen] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            menuOpen && styles.mobileButtonActive
          }`}
          onClick={toggleMenu}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          menuOpen && styles.navMobileActive
        }`}
      >
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
    </>
  );
};

export default UserHeaderNav;
