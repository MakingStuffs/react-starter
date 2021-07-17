import Providers from "./Providers";
import { GlobalFonts } from "./assets/fonts/fonts";
import { GlobalColors, GlobalStyling } from "./styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import { Home } from "./pages";
import { navLinks } from "./config";
import logo from "./assets/images/logo-letters-light-125x125.png";
import { useEffect } from "react";

function App() {
  // get accurate viewport height on page load
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--vh",
      `${window.innerHeight * 0.01}px`
    );
  }, []);

  return (
    <Providers>
      <GlobalFonts />
      <GlobalColors />
      <GlobalStyling />
      <Router>
        <NavMenu navLinks={navLinks} logo={logo} />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Providers>
  );
}

export default App;
