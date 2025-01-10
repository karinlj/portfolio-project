"use client";
import "./_navbar.scss";
import "./_navlinks.scss";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navlinks from "./Navlinks";
import ToggleMenuBtn from "./ToggleMenuBtn";

const NavBar: React.FC = () => {
  const pathName = usePathname();

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMenu = () => {
    //menu open class toggle and btn rotate class toggle
    setIsMobileOpen(!isMobileOpen);
  };
  const clickLink = () => {
    if (isMobileOpen) {
      //menu open class removed
      setIsMobileOpen(false);
    }
  };
  //prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.classList.add("no_scroll");
    } else {
      document.body.classList.remove("no_scroll");
    }
  }, [isMobileOpen]);

  return (
    <header className="nav_header" id="nav">
      <li className="nav_home_link_item">
        <Link href="/" onClick={clickLink} className={`link ${
                  pathName === `/` ? "active" : ""
                }`}>
          <span className="link_icon">K.</span>      
        </Link>
      </li>
      <ToggleMenuBtn toggleMenu={toggleMenu} isMobileOpen={isMobileOpen} />
      <nav
        className={`navbar_mobile ${isMobileOpen ? "navbar_mobile_open" : ""}`}
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
