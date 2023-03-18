import { useEffect, useState } from "react";
import JobList from "../components/JobList";
import { getAuth, signOut } from "firebase/auth";

function Home() {
  const [isLoading, setIsLoading] = useState();
  const [loadedJobs, setLoadedJobs] = useState([]);

  const auth = getAuth();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {});
  };

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch(
  //     "https://tnpw2jobs-default-rtdb.europe-west1.firebasedatabase.app/jobs.json"
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const jobs = [];
  //       for (const key in data) {
  //         const job = {
  //           id: key,
  //           ...data[key],
  //         };
  //         jobs.push(job);
  //       }
  //       setIsLoading(false);
  //       setLoadedJobs(jobs);
  //     });
  // }, []);

  return (
    <>
      <div>
        <h2 style={{ textAlign: "center" }}>NO JOBS LOADED</h2>
      </div>
      {/* {loadedJobs.length === 0 && <div>NO LOADED JOBS</div>}
      {loadedJobs.length > 0 &&
        <div>
          <JobList jobs={loadedJobs} />
        </div>
      } */}
      <button onClick={handleLogout}>SIGN OUT</button>
    </>
  );
}

export default Home;
