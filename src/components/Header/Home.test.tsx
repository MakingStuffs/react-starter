import { screen, render } from "../../utils";
import HomeHeader from "./Home";
describe("<HomeHeader />", () => {
  beforeEach(() => {
    render(
      <HomeHeader heading="Test" subHeading="Testing" showSocials={true} />
    );
  });
  it("Renders on page", () => {
    const element = screen.getByTestId("homeHeaderTest");
    expect(element).toBeInTheDocument();
  });
  it("Renders the correct title", () => {
    const element = screen.getByText(/^Test$/gi);
    expect(element).toBeInTheDocument();
  });
  it("Renders the correct sub title", () => {
    const element = screen.getByText(/^Testing$/gi);
    expect(element).toBeInTheDocument();
  });
  it("Renders the social icons", () => {
    const { container } = render(
      <HomeHeader heading="Test" subHeading="Testing" showSocials={true} />
    );
    const element = container.querySelector(
      'header > div > div > ul > li  > a[href*="twitter"]'
    );
    expect(element).toBeInTheDocument();
  });

  it("Renders without the social icons", () => {
    const { container } = render(
      <HomeHeader heading="Test" subHeading="Testing" showSocials={false} />
    );
    const element = container.querySelector(
      'header > div > div > ul > li  > a[href*="twitter"]'
    );
    expect(element).not.toBeInTheDocument();
  });
});
