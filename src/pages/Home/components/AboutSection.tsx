import styled from "styled-components";
import { Section } from "../../../components/Styled";

interface AboutSectionProps {
  title: string;
  content: string[];
  image: string;
  imageAlt: string;
}

const AboutSection: React.FC<
  AboutSectionProps & React.HTMLAttributes<HTMLDivElement>
> = ({ title, image, imageAlt, content, ...rest }) => {
  return (
    <StyledAboutSection {...rest}>
      <StyledTextBlock>
        <StyledHeader>
          <img src={image} alt={imageAlt} width={100} height={100} />
          <h2>{title}</h2>
        </StyledHeader>
        <StyledContent>
          {content.map((p, i) => (
            <p key={`${title}-${i}-content`}>{p}</p>
          ))}
        </StyledContent>
      </StyledTextBlock>
    </StyledAboutSection>
  );
};

const StyledAboutSection = styled(Section)`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const StyledTextBlock = styled.div`
  padding: ${({ theme }) =>
    `calc(${theme.spacing.small.y} * 10) ${theme.spacing.small.x}`};
`;

const StyledHeader = styled.header`
  text-align: center;
  img {
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
`;
const StyledContent = styled.div`
  line-height: 1.5rem;
  letter-spacing: 1px;
`;

export default AboutSection;
