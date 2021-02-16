import React from "react";
import LoginView from "./Login.view";
import { Link } from "react-router-dom";
import { REGISTER } from "../../../navigation/CONSTANTS";

export const LoginContainer: React.FC = ()  => {
  return (
    <div>
      <Link to={REGISTER}>Cadastre-se</Link>
      <LoginView title="Login" />
    </div>
  );
}
