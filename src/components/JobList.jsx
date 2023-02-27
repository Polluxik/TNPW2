import classes from "./JobList.module.css";

import Job from "./Job";

function JobList(props) {
  return (
    <ul className={classes.list}>
      {props.jobs.map((job) => (
        <Job
          key={job.id}
          image={job.image}
          desc={job.desc}
          title={job.title}
          date={job.date}
        />
      ))}
    </ul>
  );
}
export default JobList;
