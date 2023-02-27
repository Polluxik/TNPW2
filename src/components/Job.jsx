import classes from "./Job.module.css";
import JobLayout from "./layout/JobLayout";

function Job() {
  return (
    <li className={classes.item}>
    <JobLayout>
      <div className={classes.image}>
        <img src="https://initiate.alphacoders.com/images/106/cropped-1920-1080-106774.jpg?5185" alt=""></img>
      </div>
      <div className={classes.content}>
        <h1>TITLE</h1>
        <p>DESCRIPTION</p>
      </div>
      </JobLayout>
    </li>
  );
}

export default Job;
