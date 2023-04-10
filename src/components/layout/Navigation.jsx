import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { useEffect, useState } from "react";
import { doc, getDoc } from "@firebase/firestore";

function Navigation() {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;

        getDoc(doc(db, "accounts", user.email)).then((docSnap) => {
          if (docSnap.exists()) {
            const username = docSnap.data().username;
            setUserId(username);
            //console.log("Document data:", userId);
          } else {
            console.log("No such document!");
          }
        });

       // console.log("uid", uid);
      } else {
        setUserId();
        //console.log("user is logged out");
      }
    });
  }, []);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Job Search</div>
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
              <Link to="/account">{userId}</Link>
            </li>
          )}
          {!userId && (
            <li>
              <Link to="/account">Account</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
