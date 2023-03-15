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
        {/* COME BACK TO THIS! */}
        {/* <li>
          <Link to="/category-page">Product Category</Link>
        </li> */}
        {/* in MOBILE, bring it BELOW logo */}
        <li className="toggle">
          {/* maybe have text switch between Grayscale and Color? In that case might need to bring the handleChange into this component */}
          Grayscale
          <Toggle />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;