import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Register from "./firebase/Register";
import Login from "./firebase/Login";
import classes from "./Credentials.module.css";



function Credentials() {
  const [isLogin, setIsLogin] = useState(true);

  function handleLogin(){
    if(isLogin) setIsLogin(false);
    else setIsLogin(true);
    console.log(isLogin);
  }
  return (
    <div>
    <>
      {isLogin ? <Login onLoginClick={handleLogin}/> : <Register onRegisterClick={handleLogin}/>}
    </>
    </div>
  );
}

export default Credentials;
