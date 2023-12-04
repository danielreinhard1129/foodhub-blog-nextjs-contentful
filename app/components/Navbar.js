"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

function NavbarComp() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    transition: "background-color 0.6s ease",
    backgroundColor: scrollPosition > 0 ? "gray" : "transparent",
  };

  const textStyle = {
    color: scrollPosition > 0 ? "white" : "black",
  };

  const bgNavMobileStyle = {
    backgroundColor: scrollPosition > 0 ? "gray" : "white",
  };

  return (
    <div className="sticky top-0 z-50" style={navbarStyle}>
      <Navbar fluid className="container mx-auto max-w-7xl bg-transparent px-4">
        <NavbarBrand as={Link} href="/">
          <h3 className="text-3xl font-bold" style={textStyle}>
            FoodHub
          </h3>
        </NavbarBrand>
        <NavbarToggle style={textStyle} />

        {/* MOBILE */}
        <div className="relative w-full sm:static md:hidden">
          <NavbarCollapse
            className="absolute mx-0 mt-3 bg-white"
            style={bgNavMobileStyle}
          >
            <NavbarLink as={Link} href="/" style={textStyle}>
              Home
            </NavbarLink>
            <NavbarLink as={Link} href="/" style={textStyle}>
              About
            </NavbarLink>
            <NavbarLink as={Link} href="/" style={textStyle}>
              Contact
            </NavbarLink>
          </NavbarCollapse>
        </div>

        {/* DESKTOP */}
        <NavbarCollapse className="mx-0 hidden md:flex">
          <NavbarLink as={Link} href="/" style={textStyle}>
            Home
          </NavbarLink>
          <NavbarLink as={Link} href="/" style={textStyle}>
            About
          </NavbarLink>
          <NavbarLink as={Link} href="/" style={textStyle}>
            Contact
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}

export default NavbarComp;
