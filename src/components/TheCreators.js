import { Link } from "react-router-dom";
import { useGray } from "../context/ToggleGrayscale";

import caiyi from "../assets/TheCreators/caiyi.JPG";
import chris from "../assets/TheCreators/chris.JPG";
import heidi from "../assets/TheCreators/heidi.jpeg";
import ingrid from "../assets/TheCreators/ingrid.jpg";
import neha from "../assets/TheCreators/neha.jpeg";
import gitHubIcon from "../assets/TheCreators/GitHub.png";
import linkedInIcon from "../assets/TheCreators/LinkedIn.png";
import portfolioIcon from "../assets/TheCreators/Portfolio.png";
const TheCreators = () => {
  const { isActive } = useGray();
  return (
    <section className="theCreators">
      <div className="wrapper">
        <Link to="/" className="link">
          {" "}
          <span>&lsaquo;</span> <p>Home</p>
        </Link>
        <h2>Meet the Creators</h2>
        <ul className="creatorsGrid">
          <li className="creatorCard">
            <div className="imgContainer">
              <img
                src={caiyi}
                alt="caiyi"
                style={{ filter: isActive ? "grayscale(100%)" : "none" }}
              />
            </div>
            <div className="textContainer">
              <h3>
                Caiyi Chen <span>(she/her)</span>
              </h3>
              <p>Software Developer</p>
              <ul className="socialsList">
                <li className="socials">
                  <a
                    href="https://github.com/Sputnikccy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="icon"
                      src={gitHubIcon}
                      alt="github icon"
                      style={{ filter: isActive ? "grayscale(100%)" : "none" }}
                    ></img>
                  </a>
                </li>
                <li className="socials">
                  <a
                    href="https://www.linkedin.com/in/caiyi-chen-b21898244/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="icon"
                      src={linkedInIcon}
                      alt="linkedIn icon"
                      style={{ filter: isActive ? "grayscale(100%)" : "none" }}
                    ></img>
                  </a>
                </li>
                <li className="socials">
                  <a
                    href="https://caiyi-chen.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="icon"
                      src={portfolioIcon}
                      alt="portfolio icon"
                      style={{ filter: isActive ? "grayscale(100%)" : "none" }}
                    ></img>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="creatorCard">
            <div className="imgContainer">
              <img
                src={chris}
                alt="chris"
                style={{ filter: isActive ? "grayscale(100%)" : "none" }}
              />
            </div>
            <div className="textContainer">
              <h3>
                Chris Kim <span>(she/her)</span>
              </h3>
              <p>Software Developer</p>
              <ul className="socialsList">
                <li className="socials">
                  <a
                    href="https://github.com/chriskimty"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="icon"
                      src={gitHubIcon}
                      alt="github icon"
                      style={{ filter: isActive ? "grayscale(100%)" : "none" }}
                    ></img>
                  </a>
                </li>
                <li className="socials">
                  <a
                    href="https://www.linkedin.com/in/chris-ty-kim/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="icon"
                      src={linkedInIcon}
                      alt="linkedIn icon"
                      style={{ filter: isActive ? "grayscale(100%)" : "none" }}
                    ></img>
                  </a>
                </li>
                <li className="socials">
                  <a
                    href="https://chriskim.dev/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="icon"
                      src={portfolioIcon}
                      alt="portfolio icon"
                      style={{ filter: isActive ? "grayscale(100%)" : "none" }}
                    ></img>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="creatorCard">
            <div className="imgContainer">
              <img
                src={heidi}
                alt="heidi"
                style={{ filter: isActive ? "grayscale(100%)" : "none" }}
              />
            </div>
            <div className="textContainer">
              <h3>
                Heidi Ye <span>(she/her)</span>
              </h3>
              <p>Simulation Engineer</p>
              <ul className="socialsList">
                <li className="socials">
                  <a
                    href="https://www.linkedin.com/in/heidiye66/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="icon"
                      src={linkedInIcon}
                      alt="linkedIn icon"
                      style={{ filter: isActive ? "grayscale(100%)" : "none" }}
                    ></img>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="creatorCard">
            <div className="imgContainer">
              <img
                src={ingrid}
                alt="ingrid"
                style={{ filter: isActive ? "grayscale(100%)" : "none" }}
              />
            </div>
            <div className="textContainer">
              <h3>
                Ingrid Yau <span>(she/her)</span>
              </h3>
              <p>Product Designer</p>
              <ul className="socialsList">
                <li className="socials">
                  <a
                    href="https://www.linkedin.com/in/ingridyau/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="icon"
                      src={linkedInIcon}
                      alt="linkedIn icon"
                      style={{ filter: isActive ? "grayscale(100%)" : "none" }}
                    ></img>
                  </a>
                </li>
                <li className="socials">
                  <a
                    href="https://ingridyau.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="icon"
                      src={portfolioIcon}
                      alt="portfolio icon"
                      style={{ filter: isActive ? "grayscale(100%)" : "none" }}
                    ></img>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="creatorCard">
            <div className="imgContainer">
              <img
                src={neha}
                alt="neha"
                style={{ filter: isActive ? "grayscale(100%)" : "none" }}
              />
            </div>
            <div className="textContainer">
              <h3>
                Neha Bhole <span>(she/her)</span>
              </h3>
              <p>Software Developer</p>
              <ul className="socialsList">
                <li className="socials">
                  <a
                    href="https://github.com/bholeneha"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="icon"
                      src={gitHubIcon}
                      alt="github icon"
                      style={{ filter: isActive ? "grayscale(100%)" : "none" }}
                    ></img>
                  </a>
                </li>
                <li className="socials">
                  <a
                    href="https://www.linkedin.com/in/nehabhole/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="icon"
                      src={linkedInIcon}
                      alt="linkedIn icon"
                      style={{ filter: isActive ? "grayscale(100%)" : "none" }}
                    ></img>
                  </a>
                </li>
                <li className="socials">
                  <a
                    href="http://nehabhole.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="icon"
                      src={portfolioIcon}
                      alt="portfolio icon"
                      style={{ filter: isActive ? "grayscale(100%)" : "none" }}
                    ></img>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TheCreators;
