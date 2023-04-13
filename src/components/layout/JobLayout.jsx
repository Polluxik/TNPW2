import classes from "./JobLayout.module.css";

//layout pro nabidky, {children} je pouzito na zobrazi contentu, ktery je uvnitr JobLayoutu
function JobLayout({ children }) {
  return <div className={classes.card}>{children}</div>;
}
export default JobLayout;
