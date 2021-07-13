import { screen, render } from "../../utils";
import SocialIcons from "./SocialIcons";

it("Renders networks as icons", () => {
  render(<SocialIcons />);
  const icons = screen.getByTestId("social-icons");
  expect(icons).toBeInTheDocument();
});
