import { useNavigate } from "react-router-dom";
import CreateJob from "../components/CreateJob";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

function NewJob() {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLogged(true);
      console.log("user logged in? : " + isLogged);
    } else {
      setIsLogged(false);
    }
  });

  return (
    <>{isLogged ? <CreateJob/> : <div>YOU NEED TO BE LOGGED IN!</div>}</>
  );
}
export default NewJob;
