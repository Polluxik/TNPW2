import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, setDoc } from "@firebase/firestore";

import classes from "./Login.module.css";

function Register(props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function registerOnClickListener(e){
    e.preventDefault();
    props.onRegisterClick();
  }

  const onRegister = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        setDoc(doc(db, "accounts", email), {
          username: username,
        });

        console.log(user, username);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div>
      <h2 className={classes.title}>Register</h2>
      <form>
        <label className={classes.labels}htmlFor="username">Name</label>
        <input className={classes.input}
          type="text"
          id="username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className={classes.labels}htmlFor="emailReg">Email</label>
        <input className={classes.input}
          type="email"
          id="emailReg"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className={classes.labels}htmlFor="passwordReg">Password</label>
        <input className={classes.input}
          type="password"
          id="passwordReg"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input className={classes.submit} type="submit" value="Register" onClick={onRegister} />
        <p>Already have an account? <a className={classes.link} onClick={registerOnClickListener}>Sign In</a>.</p>

      </form>
    </div>
  );
}
export default Register;
