import { render, screen } from "../../../utils";
import DesktopNavLinks from "./DesktopNavLinks";
import { navLinks } from "../../../config";

it("Renders desktop nav element", () => {
  render(<DesktopNavLinks navLinks={navLinks} />);
  const element = screen.getByTestId("desktop-nav-links");
  expect(element).toBeInTheDocument();
});

it("Renders all the links", () => {
  render(<DesktopNavLinks navLinks={navLinks} />);
  navLinks.forEach((link) => {
    const element = screen.getByText(link.label);
    expect(element).toBeInTheDocument();
  });
});
