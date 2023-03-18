import { Link } from "react-router-dom";
import Toggle from "./Toggle";

const NavBar = () => {
  return (
    <nav className="mainNav">
      <div className="logo">
        <Link className="navLogo" to="/">
          <h1>chrōma</h1>
        </Link>
      </div>
      <ul>
        <li className="toggle">
          <Toggle />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;