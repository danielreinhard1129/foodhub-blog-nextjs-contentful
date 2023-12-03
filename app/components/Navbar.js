import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

function NavbarComp() {
  return (
    <Navbar
      fluid
      className="container sticky top-0 z-50 mx-auto max-w-7xl px-4"
    >
      <NavbarBrand as={Link} href="/">
        <h3 className="text-3xl font-bold">FoodHub</h3>
      </NavbarBrand>
      <NavbarToggle />
      <div className="relative w-full sm:static md:hidden">
        <NavbarCollapse className="absolute mx-0 bg-white">
          <NavbarLink as={Link} href="/">
            Home
          </NavbarLink>
          <NavbarLink as={Link} href="/">
            About
          </NavbarLink>
          <NavbarLink as={Link} href="/">
            Contact
          </NavbarLink>
        </NavbarCollapse>
      </div>
      <NavbarCollapse className="mx-0 hidden md:flex">
        <NavbarLink as={Link} href="/">
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="/">
          About
        </NavbarLink>
        <NavbarLink as={Link} href="/">
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default NavbarComp;
