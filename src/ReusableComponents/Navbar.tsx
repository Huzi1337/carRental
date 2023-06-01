import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

import "./Navbar.scss";

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <header className={visible ? "navbar" : "navbar hide"}>
      <img src="/logo.svg"></img>
      <nav className="sections">
        <a href="#home">
          <ScrollLink
            activeClass="active"
            to="#home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </ScrollLink>
        </a>

        <a href="#news">
          <ScrollLink
            activeClass="active"
            to="#news"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            News
          </ScrollLink>
        </a>

        <a href="#">
          {" "}
          <ScrollLink
            activeClass="active"
            to="#locations"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Locations
          </ScrollLink>
        </a>

        <a href="#">
          <ScrollLink
            activeClass="active"
            to="#vehicles"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Vehicles
          </ScrollLink>
        </a>

        <a href="#">
          <ScrollLink
            activeClass="active"
            to="#about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </ScrollLink>
        </a>

        <a href="#">
          <ScrollLink
            activeClass="active"
            to="#contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </ScrollLink>
        </a>
      </nav>

      <nav>
        <a href="#home">Sign in</a>

        <a href="#">Log in</a>

        <a href="#">PL/EN</a>
      </nav>
    </header>
  );
}

export default Navbar;
