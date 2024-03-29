import React from "react";
import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import Dog from "../../Assets/dogs.svg?react";
import { UserContext } from "../../UserContext";
import Button from "../../utils/button/Button";

const Header = () => {
  const { data, userLogout, login } = React.useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    userLogout();
    navigate("/login");
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dog />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
        {login && <Button onClick={handleLogout}>Sair</Button>}
      </nav>
    </header>
  );
};

export default Header;
