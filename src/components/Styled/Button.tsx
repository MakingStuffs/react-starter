import styled from "styled-components";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  onClick,
  ...rest
}) => {
  return (
    <StyledButton {...rest} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  margin: 0;
  display: inline-block;
  padding: ${(props) => {
    const { spacing } = props.theme;
    return `${spacing.small.y} ${spacing.small.x};`;
  }}
  border: none;
  background-color: var(--secondary);
  transition: 0.3s ease;
  cursor: pointer;

  &.primary {
    background-color: ${({ theme }) => theme.colors.button.primary};

    &:hover {
      background-color: var(--secondary);
    }
  }
`;

export default Button;
