"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "./_themeswitch.scss";


const ThemeSwitch = () => {
  //  keep track of the mounted state because you cannot use the setTheme function from the useTheme hook unless you know your code is running in the browser.
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme(); //next-themes

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const themeToggler = () => {
    setTimeout(() => {
      setTheme(resolvedTheme === "light" ? "dark" : "light");

    }, 300);
  };

  return (
    <>
      <button  onClick={themeToggler} className={`theme_switch ${resolvedTheme === "dark" ? 'dark' : ''}`} >
        {resolvedTheme === "dark" ? (
          <FontAwesomeIcon icon={faSun} aria-label="Light Mode" title="Light Mode"/>
        ) : (
          <FontAwesomeIcon icon={faMoon} aria-label="Dark Mode" title="Dark Mode" />
        )}
      </button>
    </>
  );
};

export default ThemeSwitch;
