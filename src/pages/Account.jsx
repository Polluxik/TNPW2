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
      //console.log("user logged in? : " + isLogged);
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
        //console.log("Signed out successfully");
      })
      .catch((error) => {});
  };

  return (
    <div>
      {isLogged ? (
        <>
        <button style={{ backgroundColor: '#570077', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px' }} onClick={handleLogout}>SIGN OUT</button>

          <Profile user={LogUser}/>
        </>
      ) : (
        <Credentials />
      )}
    </div>
  );
}

export default Account;
