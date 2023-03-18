import Credentials from "../components/Credentials";
import { signOut } from "firebase/auth";
import { auth } from "../components/firebase/firebase";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import Profile from "../components/Profile";

function Account() {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
if(user)
{
  setIsLogged(true);
    console.log("user logged in? : " +  isLogged);
}
else {
  console.log(isLogged);
  setIsLogged(false)};
  })
  
  return (
    <div>
    {isLogged ? <Profile/> : <Credentials/>  }
    </div>
  );
}

export default Account;
