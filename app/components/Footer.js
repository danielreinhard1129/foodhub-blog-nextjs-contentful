import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

function FooterComp() {
  return (
    <Footer container>
      <FooterCopyright
        href="/"
        by="FoodHub™"
        year={2023}
        className="mb-2 text-center md:mb-0 md:text-start"
      />
      <FooterLinkGroup className="flex items-center justify-around md:justify-between">
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
}

export default FooterComp;
