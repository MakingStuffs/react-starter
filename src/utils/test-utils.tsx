import { render } from "@testing-library/react";
import Providers from "../Providers";
import { BrowserRouter as Router } from "react-router-dom";

const TestWrapper: React.FC = ({ children }) => {
  return (
    <Providers>
      <Router>{children}</Router>
    </Providers>
  );
};

const customRender = (ui: any, options?: any) => {
  return render(ui, { wrapper: TestWrapper, ...options });
};

export * from "@testing-library/react";
export { customRender as render };
