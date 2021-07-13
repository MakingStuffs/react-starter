import { render, screen } from "../../../utils";
import MobileNavLinks from "./MobileNavLinks";
import { navLinks } from "../../../config";

it("Renders mobile nav element", () => {
  render(<MobileNavLinks navLinks={navLinks} />);
  const element = screen.getByTestId("mobile-nav-links");
  expect(element).toBeInTheDocument();
});

it("Renders mobile nav drawer element", () => {
  render(<MobileNavLinks navLinks={navLinks} />);
  const element = screen.getByTestId("mobile-nav-drawer");
  expect(element).toBeInTheDocument();
});

it("Renders all the links", () => {
  render(<MobileNavLinks navLinks={navLinks} />);
  navLinks.forEach((link) => {
    const element = screen.getByText(link.label);
    expect(element).toBeInTheDocument();
  });
});
