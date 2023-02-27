import { useRef } from "react";
import JobLayout from "./layout/JobLayout";

function CreateJob({ onAddJob }) {
  const titleRef = useRef();
  const imageRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();

  function submitFunc(event) {
    event.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredImage = imageRef.current.value;
    const enteredDesc = descRef.current.value;
    const enteredDate = dateRef.current.value;

    const jobData = {
      title: enteredTitle,
      image: enteredImage,
      desc: enteredDesc,
      date: enteredDate,
    };

    console.log(jobData);
    onAddJob(jobData);
  }

  return (
    <JobLayout>
      <form onSubmit={submitFunc}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title" ref={titleRef}></input>
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input type="text" required id="image" ref={imageRef}></input>
        </div>
        <div>
          <label htmlFor="desc">Desc</label>
          <input type="text" required id="desc" ref={descRef}></input>
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input type="date" required id="date" ref={dateRef}></input>
        </div>
        <div>
          <button>Create Job</button>
        </div>
      </form>
    </JobLayout>
  );
}

export default CreateJob;
