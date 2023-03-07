import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useEffect, useState } from "react";

function Navigation() {
  const [userId, setUserId] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user);
        const uid = user.uid;
        console.log("uid", uid);
      } else {
        console.log("user is logged out");
      }
    });
  }, []);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Jobs</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">New Job</Link>
          </li>
          {userId && (
            <li>
              <Link to="/profile">Logged In</Link>
            </li>
          )}
          {!userId && (
            <li>
              <Link to="/account">Register/Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
