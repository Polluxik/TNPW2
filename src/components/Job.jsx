import classes from "./Job.module.css";
import JobLayout from "./layout/JobLayout";

function Job({image,title,desc,date}) {
  return (
    <li className={classes.item}>
    <JobLayout>
      <div className={classes.image}>
        <img src={image} alt={title}></img>
      </div>
      <div className={classes.content}>
        <h3>{title}</h3>
        <p>{desc}</p>
        <p>{date}</p>
      </div>
      <div className={classes.actions}></div>
      </JobLayout>
    </li>
  );
}

export default Job;
