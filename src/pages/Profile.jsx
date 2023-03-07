import Signup from "../components/firebase/Signup";
import { signOut } from "firebase/auth";
import { auth } from "../components/firebase/firebase";
import { useNavigate } from "react-router-dom";
function Profile() {
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {});
  };
  return (
    <div>
      <Signup />
      <button onClick={handleLogout}>SignOut</button>
    </div>
  );
}

export default Profile;
