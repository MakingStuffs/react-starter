import { render, screen } from "../../utils";
import Button from "./Button";

test("renders button", () => {
  render(<Button>Click</Button>);
  const button = screen.getByText(/Click/i);
  expect(button).toBeInTheDocument();
});
