import classes from "./MainLayout.module.css";
import Navigation from "./Navigation";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <main className={classes.main}>{children}</main>
      <Footer/>
    </div>
  );
}
export default Layout;
