import { HomeHeader } from "../../components/Header";
import { AboutSection } from "./components";
const Home: React.FC = () => {
  return (
    <>
      <HomeHeader
        heading="Paul Singh"
        subHeading="// JavaScript && nature enthusiast"
        showSocials={true}
      />
      <AboutSection />
    </>
  );
};

export default Home;
