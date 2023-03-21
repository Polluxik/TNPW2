import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, setDoc } from "@firebase/firestore";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    </div>
  );
}
export default Register;
