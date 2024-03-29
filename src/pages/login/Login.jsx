import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./loginForm/LoginForm";
import { UserContext } from "../../UserContext";
import styles from "./Login.module.css";
import LoginCreate from "./loginCreate/LoginCreate";
import LoginPasswordLost from "./loginPasswordLost/LoginPasswordLost";
import LoginPasswordReset from "./loginPasswordReset/LoginPasswordReset";
import NotFound from "../../components/notfound/NotFound";

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
