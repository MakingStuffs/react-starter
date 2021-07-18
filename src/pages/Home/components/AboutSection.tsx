import styled from "styled-components";
import { Section } from "../../../components/Styled";

const AboutSection: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...rest
}) => {
  return (
    <StyledAboutSection>
      <StyledTextBlock>
        <header>
          <h2>About Me</h2>
        </header>
        <div>
          <p>Lorem Ipsum</p>
        </div>
      </StyledTextBlock>
      <StyledTabs />
    </StyledAboutSection>
  );
};

const StyledAboutSection = styled(Section)`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const StyledTextBlock = styled.div``;
const StyledTabs = styled.div``;

export default AboutSection;
