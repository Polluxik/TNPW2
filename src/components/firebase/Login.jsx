import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, setDoc } from "@firebase/firestore";

import classes from "./Login.module.css";


function Login(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function loginOnClickListener(e){
    e.preventDefault();
    props.onLoginClick();
  }
  const onLogin = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Successfuly logged in!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div>
      <h2 className={classes.title}>Login</h2>
      <form className={classes.form}>
        <label className={classes.labels}htmlFor="email">Email</label>
        <input className={classes.input}
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className={classes.labels} htmlFor="password">Password</label>
        <input className={classes.input}
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input className={classes.submit} type="submit" value="Login" onClick={onLogin} />
        <p>New to Job Search? <a className={classes.link} onClick={loginOnClickListener}>Create an account</a>.</p>
      </form>
    </div>
  );
}

export default Login;
