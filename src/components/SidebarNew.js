import { Link } from "react-router-dom";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  menuClasses,
} from "react-pro-sidebar";
import logo from "../assets/logo.png";
function SidebarNew() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "300px",
        backgroundColor: " #111",
      }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <div
          style={{
            width: "300px",
            height: "auto",
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            background: "#111",
            borderBottom: "1px solid #555",
          }}
        >
          <img
            src={logo}
            alt="logo"
            style={{ width: "50px", height: "auto" }}
          />
          <span
            style={{
              fontWeight: "bold",
              fontSize: "28px",
              paddingLeft: "20px",
              color: "#61dbfb",
              fontFamily: "Dancing Script Roboto sans-serif",
            }}
          >
            Dream Home
          </span>
        </div>
      </Link>

      <Sidebar backgroundColor=" #111" width="301px">
        <Menu
          rootStyles={{
            ["." + menuClasses.subMenuContent]: {
              background: "#333",
            },
            ["." + menuClasses.button]: {
              "&:hover": { color: "#000" },
            },
          }}
        >
          <SubMenu label="Staff">
            <MenuItem component={<Link to="/dashboard/staff/staff-list" />}>
              {" "}
              Staff List{" "}
            </MenuItem>
            <MenuItem component={<Link to="/dashboard/staff/staff-hire" />}>
              {" "}
              Staff Hire{" "}
            </MenuItem>
          </SubMenu>

          <SubMenu label="Branch">
            <MenuItem
              component={
                <Link to="/dashboard/branch/identify-branch-address" />
              }
            >
              {" "}
              Identify Branch Address{" "}
            </MenuItem>
            <MenuItem component={<Link to="/dashboard/branch/branch-list" />}>
              {" "}
              Branch List{" "}
            </MenuItem>
            <MenuItem component={<Link to="/dashboard/branch/open-a-branch" />}>
              {" "}
              Open a Branch{" "}
            </MenuItem>
          </SubMenu>

          <SubMenu label="Client">
            <MenuItem component={<Link to="/dashboard/client/client-list" />}>
              {" "}
              Client List{" "}
            </MenuItem>
            <MenuItem component={<Link to="/dashboard/client/client-add" />}>
              {" "}
              Add a Client{" "}
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SidebarNew;
