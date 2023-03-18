import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "./firebase/firebase";
import { doc, setDoc } from "@firebase/firestore";

import classes from "./Credentials.module.css";

function Credentials() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {console.log("Successfuly logged in!")})
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
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
      <h2>Register</h2>
        <form>
          <label htmlFor="username">Name:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="emailReg">Email:</label>
          <input
            type="email"
            id="emailReg"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="passwordReg">Password:</label>
          <input
            type="password"
            id="passwordReg"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input type="submit" value="Register" onClick={onRegister} />
        </form>

        <h2>Login</h2>
        <form>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input type="submit" value="Login" onClick={onLogin} />
        </form>
      </div>
  );
}

export default Credentials;
