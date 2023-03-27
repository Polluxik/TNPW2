import classes from "./Job.module.css";
import JobLayout from "./layout/JobLayout";

function Job({ title, desc, date, pay, prof }) {
  return (
    <li className={classes.item}>
      <JobLayout>
        <div className={classes.content}>
          <div className={classes.container}>
            <h1>
              {title} ─ {prof}
            </h1>
            <p className={classes.date}>{date}</p>
          </div>
          <p>{desc}</p>
          <div className={classes.container}>
            <p>Plat: {pay}Kč/h</p>
          </div>
        </div>
      </JobLayout>
    </li>
  );
}

export default Job;
