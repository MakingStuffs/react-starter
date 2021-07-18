import { render, screen } from "../../utils";
import { Section } from ".";

describe("<Section />", () => {
  it("Renders in the DOM", () => {
    render(<Section data-testid="section" />);
    const element = screen.getByTestId("section");
    expect(element).toBeInTheDocument();
  });

  it("Renders with children", () => {
    render(
      <Section data-testid="section">
        <button>Test</button>
      </Section>
    );
    const element = screen.getByText(/test/i);
    expect(element).toBeInTheDocument();
  });
});
