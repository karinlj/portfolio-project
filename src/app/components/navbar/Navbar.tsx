"use client";
// import { client } from "@/client";
import "./_navbar.scss";
import "./_navlinks.scss";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navlinks from "./Navlinks";
import ToggleMenuBtn from "./ToggleMenuBtn";

const NavBar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => {
    //menu open class toggle and btn rotate class toggle
    setMobileOpen(!mobileOpen);
  };
  const clickLink = () => {
    if (mobileOpen) {
      //menu open class removed
      setMobileOpen(false);
    }
  };
  //prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("no_scroll");
    } else {
      document.body.classList.remove("no_scroll");
    }
  }, [mobileOpen]);

  return (
    <header className="nav_header" id="nav">
      <li className="nav_home_link_item">
        <Link href="/" onClick={clickLink}>
          <span className="link_icon">K</span>
        </Link>
      </li>

      <ToggleMenuBtn toggleMenu={toggleMenu} mobileOpen={mobileOpen} />

      <nav
        className={`navbar_mobile ${mobileOpen ? "navbar_mobile_open" : ""}`}
      >
        <Navlinks clickLink={clickLink} />
      </nav>

      <nav className="navbar_bigscreen">
        <Navlinks />
      </nav>
    </header>
  );
};
export default NavBar;
