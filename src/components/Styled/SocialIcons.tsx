import {
  FaLinkedin,
  FaStackOverflow,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import styled from "styled-components";
import { siteInfo } from "../../config";
import { SocialLinksInterface } from "../../config/types";

interface SocialLinkObject {
  name: string;
  icon: JSX.Element;
  url: string;
}

const getSocialIcons = (networks: string[]) =>
  networks.reduce((op: SocialLinkObject[], curr: string) => {
    switch (curr) {
      case "twitter":
        op.push({
          name: "Twitter",
          icon: <FaTwitter size={30} />,
          url: siteInfo.socialLinks?.twitter as string,
        });
        break;
      case "linkedIn":
        op.push({
          name: "LinkedIn",
          icon: <FaLinkedin size={30} />,
          url: siteInfo.socialLinks?.linkedIn as string,
        });
        break;
      case "gitHub":
        op.push({
          name: "GitHub",
          icon: <FaGithub size={30} />,
          url: siteInfo.socialLinks?.gitHub as string,
        });
        break;
      case "stackOverflow":
        op.push({
          name: "Stack Overflow",
          icon: <FaStackOverflow size={30} />,
          url: siteInfo.socialLinks?.stackOverflow as string,
        });
        break;
      default:
        break;
    }
    return op;
  }, []);

const SocialIcons: React.FC = () => {
  const networks = Object.keys(siteInfo.socialLinks as SocialLinksInterface);

  return (
    <StyledSocialIcons data-testid="social-icons">
      {getSocialIcons(networks).map((network, i) => (
        <li key={`social-icon-${i}`}>
          <a
            href={network.url}
            title={`View my profile on ${network.name}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            {network.icon}
          </a>
        </li>
      ))}
    </StyledSocialIcons>
  );
};

const StyledSocialIcons = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  a {
    color: ${({ theme }) => theme.colors.nav.textColor};
  }
`;

export default SocialIcons;
