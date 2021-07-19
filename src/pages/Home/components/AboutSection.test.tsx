import { screen, render } from "../../../utils";
import { AboutSection } from ".";
import image from "../../../assets/images/making-stuffs.jpg";

describe("<AboutSection />", () => {
  beforeEach(() => {
    render(
      <AboutSection
        image={image}
        imageAlt="Image of Making Stuffs"
        title="About Me"
        content={["This is line one", "This is line two"]}
        data-testid="AboutSection"
      />
    );
  });
  it("Renders on screen", () => {
    const element = screen.getByTestId("AboutSection");
    expect(element).toBeInTheDocument();
  });

  it("Renders correct title", () => {
    const element = screen.getByText(/about me/i);
    expect(element).toBeInTheDocument();
  });

  it("Renders correct description", () => {
    const element = screen.getByText(/this is line one/i);
    const element2 = screen.getByText(/this is line two/i);
    expect(element).toBeInTheDocument();
    expect(element2).toBeInTheDocument();
  });

  it("Renders image alt text", () => {
    const element = screen.getByAltText(/image of making stuffs/i);
    expect(element).toBeInTheDocument();
  });

  it("Renders image element", () => {
    const element = document.querySelector(`img[src="${image}"]`);
    expect(element).toBeInTheDocument();
  });
});
