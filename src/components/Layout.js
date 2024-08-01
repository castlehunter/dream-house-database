import styles from "./Layout.module.css";
import SidebarNew from "./SidebarNew";

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <SidebarNew />
      </div>

      <div className={styles.dashboard}>
        <div className={styles.main}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
