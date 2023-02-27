import { useNavigate } from "react-router-dom";
import CreateJob from "../components/CreateJob";
function NewJob() {
  const navigate = useNavigate();
  function addJobHandler(jobData) {
    fetch(
      "https://test2-e0e22-default-rtdb.europe-west1.firebasedatabase.app/jobs.json",
      {
        method: "POST",
        body: JSON.stringify(jobData),
        headers: { "Content-Type": "application/json" },
      }
    ).then(() => {
      navigate("/", { replace: true });
    });
  }
  return (
    <div>
      <CreateJob onAddJob={addJobHandler} />
    </div>
  );
}
export default NewJob;
