import React from "react";
import LoginView from "./Register.view";
import { Link } from "react-router-dom";
import { ROOT } from "../../../navigation/CONSTANTS";

export const RegisterContainer: React.FC = ()  => {
  return (
    <div>
      <Link to={ROOT}>Login</Link>
      <LoginView title="Cadastro" />
    </div>
  );
}
