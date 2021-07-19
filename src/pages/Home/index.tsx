import { HomeHeader } from "../../components/Header";
import { AboutSection } from "./components";
import { aboutSectionData } from "./data";

const Home: React.FC = () => {
  return (
    <>
      <HomeHeader
        heading="Paul Singh"
        subHeading="// JavaScript && nature enthusiast"
        showSocials={true}
      />
      <AboutSection
        title={aboutSectionData.title}
        content={aboutSectionData.content}
        image={aboutSectionData.image}
        imageAlt={aboutSectionData.imageAlt}
      />
    </>
  );
};

export default Home;
