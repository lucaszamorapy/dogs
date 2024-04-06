import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import Dogs from "../../Assets/dogs-footer.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img src={Dogs} alt="Dogs Icon" />
      <p>
        Dogs. Alguns direitos reservados | Desenvolvido por{" "}
        <Link to="https://github.com/lucaszamorapy" target="_blank">
          Lucas Avellar
        </Link>
      </p>
    </div>
  );
};

export default Footer;
