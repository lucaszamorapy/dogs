import React from "react";
import styles from "./Button.module.css";

const Button = ({ onClick, children, ...props }) => {
  return (
    <button {...props} onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
