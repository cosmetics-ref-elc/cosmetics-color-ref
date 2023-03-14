import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="logo">
          <Link className="navLogo" to="/">
            <h3>chrōma</h3>
          </Link>
        </div>
        <div className="copyright">
          <p>
            Copyright 2023 chrōma |{" "}
            <a href="https://github.com/cosmetics-ref-elc/cosmetics-color-ref">
              {" "}
              Link to Repo
            </a>
          </p>
        </div>
        {/* Should we have this? If so, another design? */}
        <Link className="theCreators" to="/about-the-creators">
          <p>The Creators</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
