import Credentials from "../components/Credentials";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import Profile from "../components/Profile";

function Account() {
  const [isLogged, setIsLogged] = useState(false);
  const [LogUser, setLogUser] = useState();

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLogged(true);
      setLogUser(user.email);
      console.log("user logged in? : " + isLogged);
    } else {
      //console.log(isLogged);
      setIsLogged(false);
    }
  });

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        setLogUser();
        console.log("Signed out successfully");
      })
      .catch((error) => {});
  };

  return (
    <div>
      {isLogged ? (
        <>
          <Profile user={LogUser}/>
          <button onClick={handleLogout}>SIGN OUT</button>
        </>
      ) : (
        <Credentials />
      )}
    </div>
  );
}

export default Account;
