import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../loginForm/LoginForm";
import LoginCreate from "../loginCreate/LoginCreate";
import LoginPasswordReset from "../loginPasswordReset/LoginPasswordReset";
import LoginPasswordLost from "../loginPasswordLost/LoginPasswordLost";

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
