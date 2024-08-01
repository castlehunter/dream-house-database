import React, { useState } from "react";
import styles from "./SidebarNew.module.css";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
function SidebarNew() {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar backgroundColor=" #111">
        <Menu>
          <SubMenu label="Staff">
            <MenuItem
              component={<Link to="/dashboard/staff/staff-list" />}
              active
            >
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
