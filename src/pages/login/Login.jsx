import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "../../components/loginForm/LoginForm";
import LoginPasswordReset from "../../components/loginPasswordReset/LoginPasswordReset";
import LoginPasswordLost from "../../components/loginPasswordLost/LoginPasswordLost";
import LoginCreate from "../../components/loginCreate/LoginCreate";
import { UserContext } from "../../UserContext";

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
};

export default Login;
