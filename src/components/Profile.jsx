import { useEffect, useState } from "react";

import { getDocs, collection } from "@firebase/firestore";
import { db } from "../components/firebase/firebase";

import JobList from "./JobList";

function Profile({user}) {
  const [loadedJobs, setLoadedJobs] = useState([]);

  useEffect(() => {
    const getAllDocuments = async () => {
      const documents = [];
      console.log(user);
      const querySnapshot = await getDocs(collection(db, "accounts", user, "jobslist"));
      
      querySnapshot.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
      });
       setLoadedJobs(documents);
    };
    getAllDocuments();
  }, []);

  return (
    <>
      {/* <button onClick={getAllDocuments}>CC</button> */}
      {/* <div>
        <h2 style={{ textAlign: "center" }}>NO JOBS LOADED</h2>
      </div> */}
      {loadedJobs.length === 0 && (
        <div style={{ textAlign: "center" }}>NO LOADED JOBS</div>
      )}
      {loadedJobs.length > 0 && (
        <div>
          <JobList jobs={loadedJobs} />
        </div>
      )}
    </>
  );
}
export default Profile;
