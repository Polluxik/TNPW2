import classes from "./JobList.module.css";

import Job from "./Job";

function JobList({jobs}) {
  return (
    <ul className={classes.list}>
      {jobs.map((job) => (
        <Job
          key={job.id}
          desc={job.desc}
          title={job.title}
          date={job.date}
          pay={job.pay}
          prof={job.prof}
        />
      ))}
    </ul>
  );
}
export default JobList;
