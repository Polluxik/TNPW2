import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Register from "./firebase/Register";
import Login from "./firebase/Login";
import classes from "./Credentials.module.css";

function Credentials() {
  return (
    <div>
      <Register />
      <Login />
    </div>
  );
}

export default Credentials;
