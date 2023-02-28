import classes from "./Job.module.css";
import JobLayout from "./layout/JobLayout";
  
function Job({ title, desc, date,pay }) {
  return (
    <li className={classes.item}>
      <JobLayout>
        <div className={classes.content}>
          <h1>{title}</h1>
          <p>{desc} lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
          <p>Plat: {pay} /h</p>
          <p className={classes.date}>Publikováno {date}</p>
        </div>
        {/* <div className={classes.actions}></div> */}
      </JobLayout>
    </li>
  );
}

export default Job;
