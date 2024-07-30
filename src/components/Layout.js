import PageNav from "./PageNav";
import Footer from "./Footer";
import styles from "./Layout.module.css";
import Sidebar from "./Sidebar";

const sidebarLinks = [
  { linkName: "Staff List", linkPath: "staff-list" },
  { linkName: "Staff Hire", linkPath: "staff-hire" },
];

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <Sidebar sidebarLinks={sidebarLinks} />
      </div>
      <div className={styles.dashboard}>
        <PageNav />
        <div className={styles.main}>{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
