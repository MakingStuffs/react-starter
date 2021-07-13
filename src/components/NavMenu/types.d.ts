export interface NavLinkInterface {
  href: string;
  title: string;
  openInNewWindow?: boolean;
  label: string;
  isHashLink?: boolean;
}

export interface NavBarProps {
  navLinks: NavLinkInterface[];
  logo?: string;
  logoAlt?: string;
}
