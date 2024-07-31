import styles from "./Layout.module.css";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <div className={styles.dashboard}>
        <div className={styles.main}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
