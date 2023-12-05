import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import Link from "next/link";

function FooterComp() {
  return (
    <Footer container>
      <FooterCopyright
        by="FoodHub™"
        year={2023}
        className="mb-2 text-center md:mb-0 md:text-start"
      />
      <FooterLinkGroup className="flex items-center justify-around md:justify-between">
        <FooterLink as={Link} href="/">
          Home
        </FooterLink>
        <FooterLink as={Link} href="/">
          About
        </FooterLink>
        <FooterLink as={Link} href="">
          Contact
        </FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
}

export default FooterComp;
