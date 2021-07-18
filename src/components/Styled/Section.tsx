import styled from "styled-components";

const Section: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...rest
}) => {
  return <StyledSection {...rest}>{children}</StyledSection>;
};

const StyledSection = styled.section`
  padding: ${({ theme }) => theme.spacing.small.y};
`;

export default Section;
