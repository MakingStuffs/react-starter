import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { NavLinkInterface } from "../types";
import { Button, SocialIcons } from "../../Styled";
import styled from "styled-components";

const MobileNavLinks: React.FC<
  {
    navLinks: NavLinkInterface[];
    logo?: string;
  } & React.HTMLAttributes<HTMLElement>
> = ({ navLinks, logo, ...rest }) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(true);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  return (
    <div {...rest} data-testid="mobile-nav-links">
      <StyledMenuDrawer
        aria-hidden={drawerOpen}
        data-testid="mobile-nav-drawer"
      >
        <StyledMenuDrawerHeader>
          {logo && <img src={logo} height={40} alt="Logo" />}
          <Button
            style={{ backgroundColor: "transparent" }}
            onClick={handleDrawerToggle}
          >
            <MdClose style={{ color: "white", padding: 0 }} size={30} />
          </Button>
        </StyledMenuDrawerHeader>
        <StyledMenuDrawerContent>
          <StyledNavLinks>
            {navLinks.map((link, i) => (
              <li key={`mobile-nav-link-${i}`}>{link.label}</li>
            ))}
          </StyledNavLinks>
        </StyledMenuDrawerContent>
        <StyledMenuDrawerFooter>
          <SocialIcons />
        </StyledMenuDrawerFooter>
      </StyledMenuDrawer>
      <Button
        style={{ backgroundColor: "transparent" }}
        onClick={handleDrawerToggle}
      >
        <MdMenu style={{ color: "white", padding: 0 }} size={30} />
      </Button>
    </div>
  );
};

const StyledMenuDrawer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 300px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.nav.drawerBackgroundColor};
  transition: transform 0.3s ease;

  &[aria-hidden="true"] {
    transform: translateX(-100%);
  }

  &[aria-hidden="false"] {
    transform: translateX(0);
  }
`;
const StyledMenuDrawerHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 0;
  align-self: start;
  width: 100%;

  button {
    margin-left: auto;
  }
`;
const StyledMenuDrawerContent = styled.div`
  flex-grow: 1;
`;
const StyledMenuDrawerFooter = styled.footer`
  margin-top: auto;
`;

const StyledNavLinks = styled.ul`
  margin: 0;
  list-style-type: none;

  li {
    padding: ${({ theme }) =>
      `${theme.spacing.medium.y} ${theme.spacing.medium.x}`};
  }
`;

export default MobileNavLinks;
