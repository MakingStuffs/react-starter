import { ThemeProvider } from "./context";

const Providers: React.FC = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
