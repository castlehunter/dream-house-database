import styles from "./Siderbar.module.css";
import {
  CSidebar,
  CSidebarHeader,
  CSidebarBrand,
  CSidebarNav,
  CNavItem,
  CNavTitle,
  CNavGroup,
  CBadge,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import logo from "../assets/logo.png";

function Sidebar() {
  return (
    <CSidebar
      className="border-end"
      colorScheme="dark"
      style={{ height: "100vh" }}
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
            <span className={styles.logoText}>Dream Home</span>
          </div>
        </CSidebarBrand>
      </CSidebarHeader>
      <CSidebarNav>
        <CNavTitle>Dashboard</CNavTitle>

        <CNavItem href="/">
          Home <CBadge color="primary ms-auto">NEW</CBadge>
        </CNavItem>

        <CNavGroup toggler={<>Staff</>}>
          <CNavItem href="/staff/staff-list">
            <span className="nav-icon">
              <span className="nav-icon-bullet"></span>
            </span>{" "}
            Staff List
          </CNavItem>
          <CNavItem href="/staff/staff-hire">
            <span className="nav-icon">
              <span className="nav-icon-bullet"></span>
            </span>{" "}
            Staff Hire
          </CNavItem>
        </CNavGroup>

        <CNavGroup toggler={<>Branch</>}>
          <CNavItem href="/branch/identify-branch-address">
            <span className="nav-icon">
              <span className="nav-icon-bullet"></span>
            </span>{" "}
            Identify Branch Address
          </CNavItem>
          <CNavItem href="/branch/branch-list">
            <span className="nav-icon">
              <span className="nav-icon-bullet"></span>
            </span>{" "}
            Branch List
          </CNavItem>
          <CNavItem href="/branch/open-a-branch">
            <span className="nav-icon">
              <span className="nav-icon-bullet"></span>
            </span>{" "}
            Open a Branch
          </CNavItem>
        </CNavGroup>

        <CNavGroup toggler={<>Client</>}>
          <CNavItem href="/client/client-list">
            <span className="nav-icon">
              <span className="nav-icon-bullet"></span>
            </span>{" "}
            Client List
          </CNavItem>
          <CNavItem href="/client/client-add">
            <span className="nav-icon">
              <span className="nav-icon-bullet"></span>
            </span>{" "}
            Add a Client
          </CNavItem>
        </CNavGroup>
      </CSidebarNav>
    </CSidebar>
  );
}

export default Sidebar;
