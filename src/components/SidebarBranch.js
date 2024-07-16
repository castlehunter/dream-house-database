import { NavLink } from "react-router-dom";

function SidebarBranch() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">S</NavLink>
        </li>
        <li>
          <NavLink to="/">ire</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SidebarBranch;
