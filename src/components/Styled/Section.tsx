import styled from "styled-components";

const Section: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...rest
}) => {
  return <StyledSection {...rest}>{children}</StyledSection>;
};

const StyledSection = styled.section`
  padding: ${({ theme }) => theme.spacing.small.y};
  background-color: ${({ theme }) => theme.colors.section.backgroundColor};
  color: ${({ theme }) => theme.colors.section.textColor};
`;

export default Section;
