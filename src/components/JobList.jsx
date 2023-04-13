import classes from "./JobList.module.css";

import Job from "./Job";
import JobEdit from "./JobEdit";

//zobrazi list nabidek podle toho jestli je nastavena promenna edit
function JobList({jobs, edit, user}) {
  return (
    <>
    {edit ? <ul className={classes.list}>
      {jobs.map((job) => (
        <JobEdit
          key={job.id}
          desc={job.desc}
          title={job.title}
          date={job.date}
          pay={job.pay}
          prof={job.prof}
          id={job.id}
          user={user}
        />
      ))}
    </ul> : <ul className={classes.list}>
      {jobs.map((job) => (
        <Job
          key={job.id}
          desc={job.desc}
          title={job.title}
          date={job.date}
          pay={job.pay}
          prof={job.prof}
          mail={job.mail}
        />
      ))}
    </ul>}
    </>
  );
}
export default JobList;
