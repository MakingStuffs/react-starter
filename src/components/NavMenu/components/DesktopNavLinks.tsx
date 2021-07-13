import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
import { NavLinkInterface } from "../types";

const DesktopNavLinks: React.FC<
  { navLinks: NavLinkInterface[] } & React.HTMLAttributes<HTMLElement>
> = ({ navLinks, ...rest }) => {
  return (
    <StyledNavMenuLinks {...rest} data-testid="desktop-nav-links">
      {navLinks.map((link, index) => (
        <StyledMenuLink key={`navLink-${index}`}>
          {link.isHashLink ? (
            <HashLink to={link.href} title={link.title}>
              {link.label}
            </HashLink>
          ) : (
            <Link
              to={link.href}
              title={link.title}
              target={link.openInNewWindow ? "__blank" : ""}
            >
              {link.label}
            </Link>
          )}
        </StyledMenuLink>
      ))}
    </StyledNavMenuLinks>
  );
};

const StyledNavMenuLinks = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledMenuLink = styled.li`
  display: inline-block;
  margin: 0 0.25rem;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  a {
    color: ${({ theme }) => theme.colors.nav.textColor};
    text-decoration: none;
  }
`;

export default DesktopNavLinks;
