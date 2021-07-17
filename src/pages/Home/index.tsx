import { HomeHeader } from "../../components/Header";

const Home: React.FC = () => {
  return (
    <HomeHeader
      heading="Paul Singh"
      subHeading="// JavaScript && nature enthusiast"
      showSocials={true}
    />
  );
};

export default Home;
