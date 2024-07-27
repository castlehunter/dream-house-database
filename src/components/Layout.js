import PageNav from "./PageNav";
import Footer from "./Footer";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <PageNav />
      <div className={styles.layout}>
        <div className={styles.main}>{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
