import { useEffect, useState } from "react";
import JobList from "../components/JobList";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedJobs, setLoadedJobs] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://test2-e0e22-default-rtdb.europe-west1.firebasedatabase.app/jobs.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const jobs = [];
        for (const key in data) {
          const job = {
            id: key,
            ...data[key],
          };
          jobs.push(job);
        }
        setIsLoading(false);
        setLoadedJobs(jobs);
      });
  }, []);

  return (
    <>
      {loadedJobs.length === 0 && <div>NO LOADED JOBS</div>}
      {loadedJobs.length > 0 &&
        <div>
          <JobList jobs={loadedJobs} />
        </div>
      }
    </>
  );
}

export default Home;
