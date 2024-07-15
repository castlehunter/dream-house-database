import { NavLink } from "react-router-dom";

function StaffSideBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/staff-list">Staff List</NavLink>
        </li>
        <li>
          <NavLink to="/staff-hire">Staff Hire</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default StaffSideBar;
