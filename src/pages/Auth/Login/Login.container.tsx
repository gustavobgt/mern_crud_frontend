import React from "react";
import LoginView from "./Login.view";
import { Link } from "react-router-dom";
import { REGISTER } from "../../../navigation/CONSTANTS";

export const LoginContainer: React.FC = ()  => {
  return (
    <div>
      <LoginView title="Login" />
    </div>
  );
}
