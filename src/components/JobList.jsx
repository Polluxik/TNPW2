import classes from "./JobList.module.css";

import Job from "./Job";

function JobList() {
  return (
    <ul className={classes.list}>
      <Job />
      <Job />
      <Job />
      <Job />
    </ul>
  );
}
export default JobList;
