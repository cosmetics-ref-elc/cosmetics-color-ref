import { Link } from "react-router-dom";

const NavBar = () => {
  return (
      <nav className="mainNav">
      <div className="logo">
        <Link className="navLogo" to="/">
          <h1>chrōma</h1>
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/category-page">Product Category</Link>
        </li>
        <li className="toggle">
          Greyscale
          {/* <button>toggle</button> */}
          <div id="darkmode-section">
            <label id="darkmode-label" for="darkmode">
              <input id="darkmode-input" type="checkbox" />
              <span id="darkmode-toggle"></span>
            </label>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;