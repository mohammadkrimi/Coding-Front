import { Link, NavLink } from "react-router";

const Nav = () => {
  return (
    <nav className="bg-amber-400">
      <ul>
        <li>
          <NavLink
            to="/a"
            className={({ isActive }) => {
              return isActive ? "border" : "underline";
            }}
          >
            Page A
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/b"
            className={({ isActive }) => {
              return isActive ? "border" : "underline";
            }}
          >
            Page B
          </NavLink>
        </li>
        <li>
          <Link to="/c/foo" className="underline">
            Page C
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
