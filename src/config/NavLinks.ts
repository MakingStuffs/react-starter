import { NavLinkInterface } from "../components/NavMenu/types";

const navLinks: NavLinkInterface[] = [
  { href: "/", title: "Home to makingstuffs.co.uk", label: "Home" },
  { href: "#about", title: "About me", label: "About", isHashLink: true },
  { href: "contact", title: "Contact me", label: "Contact" },
  { href: "portfolio", title: "My work", label: "Portfolio" },
];

export default navLinks;
