import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../../components/loginForm/LoginForm";
import LoginPasswordReset from "../../components/loginPasswordReset/LoginPasswordReset";
import LoginPasswordLost from "../../components/loginPasswordLost/LoginPasswordLost";
import LoginCreate from "../../components/loginCreate/LoginCreate";

const Login = () => {
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
