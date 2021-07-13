import { render, screen } from "../../utils";
import { navLinks } from "../../config";
import NavMenu from ".";
import logoImg from "../../assets/images/logo-letters-light-125x125.png";

beforeEach(() => {
  render(
    <NavMenu
      navLinks={navLinks}
      data-testid="NavId"
      logo={logoImg}
      logoAlt="Test logo alt"
    />
  );
});

test("Renders a nav bar on the page", () => {
  const nav = screen.getByTestId("NavId");
  expect(nav).toBeInTheDocument();
});

test("Has a logo", () => {
  const logo = screen.getAllByAltText(/test logo alt/i)[0];
  expect(logo).toBeInTheDocument();
});
