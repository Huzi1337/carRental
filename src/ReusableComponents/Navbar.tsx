import { useState, useEffect, useMemo } from "react";
import { Link as ScrollLink } from "react-scroll";
import { transformLabel } from "../utils/transformLabel";

import "./Navbar.scss";

const sections = ["home", "news", "locations", "vehicles", "about", "contact"];

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [IsMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuClickHandler = () => {
    setMenuOpen(!menuOpen);
  };

  const labels = useMemo(
    () => sections.map((user) => transformLabel(user)),
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [prevScrollPos, visible]);

  return !IsMobile ? (
    <header className={visible ? "navbar" : "navbar hide"}>
      <img src="/logo.svg"></img>
      <nav className="sections">
        {sections.map((section, key) => (
          <ScrollLink
            activeClass="active"
            to={`#${section}`}
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            key={key}
          >
            {" "}
            {labels[key]}
          </ScrollLink>
        ))}
      </nav>

      <nav className="options">
        <a href="#">Sign in</a>

        <a href="#">Log in</a>

        <a href="#">PL/EN</a>
      </nav>
    </header>
  ) : (
    <>
      {menuOpen && <div className="navbar__blinder"></div>}
      <header className={"navbar_mobile"}>
        <img src="/logo.svg"></img>
        <button
          className={
            menuOpen ? "navbar__menuButton active" : "navbar__menuButton"
          }
          onClick={menuClickHandler}
        ></button>
        {menuOpen && (
          <>
            <nav className="navbar__dropDown">
              {sections.map((section, key) => (
                <ScrollLink
                  activeClass="active"
                  to={`#${section}`}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  key={key}
                >
                  {" "}
                  {labels[key]}
                </ScrollLink>
              ))}
              <hr />
              <a href="#">Sign in</a>

              <a href="#">Log in</a>

              <a href="#">PL/EN</a>
            </nav>
          </>
        )}
      </header>
    </>
  );
}

export default Navbar;
