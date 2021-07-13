import styled from "styled-components";
import { NavBarProps } from "./types";
import { DesktopNavLinks, MobileNavLinks } from "./components";
const NavMenu: React.FC<NavBarProps & React.HTMLAttributes<HTMLElement>> = ({
  navLinks,
  logo,
  logoAlt,
  ...rest
}) => {
  return (
    <StyledNavMenu {...rest} data-testid="NavId">
      {logo && (
        <StyledNavMenuLogo>
          <img
            src={logo}
            alt={logoAlt ? logoAlt : "Logo for the website"}
            width="50px"
          />
        </StyledNavMenuLogo>
      )}
      <DesktopNavLinks navLinks={navLinks} className="desktop-links" />
      <MobileNavLinks
        navLinks={navLinks}
        logo={logo}
        className="mobile-links"
      />
    </StyledNavMenu>
  );
};

const StyledNavMenu = styled.nav`
  background-color: ${({ theme }) => theme.colors.nav.backgroundColor};
  color: ${({ theme }) => theme.colors.nav.textColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 10;
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.spacing.small.y} ${theme.spacing.small.x}`};

  .mobile-links {
    display: block;
  }
  .desktop-links {
    display: none;
  }

  @media screen and (min-width: 700px) {
    .mobile-links {
      display: none;
    }
    .desktop-links {
      display: block;
    }
  }
`;

const StyledNavMenuLogo = styled.div`
  max-height: 50px;
  height: auto;
  object-fit: contain;
`;

export default NavMenu;
