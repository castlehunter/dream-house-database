import PageNav from "./PageNav";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <PageNav />
      <div className={styles.main}>{children}</div>
    </div>
  );
}

export default Layout;
