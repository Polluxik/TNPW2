import classes from "./JobLayout.module.css";

function JobLayout({ children }) {
  return <div className={classes.card}>{children}</div>;
}
export default JobLayout;
