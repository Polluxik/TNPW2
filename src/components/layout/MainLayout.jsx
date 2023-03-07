import classes from "./MainLayout.module.css";
import Navigation from "./Navigation";

function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <main className={classes.main}>{children}</main>
    </div>
  );
}
export default Layout;
