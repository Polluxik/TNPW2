import classes from "./JobList.module.css";

import Job from "./Job";

function JobList(props) {
  return (
    <ul className={classes.list}>
      {props.jobs.map((job) => (
        <Job
          key={job.id}
          desc={job.desc}
          title={job.title}
          date={job.date}
          pay={job.pay}
        />
      ))}
    </ul>
  );
}
export default JobList;
