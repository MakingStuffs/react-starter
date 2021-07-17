import styled from "styled-components";
import { SocialIcons } from "../Styled";
import { HomeHeaderProps } from "./types";
const HomeHeader: React.FC<
  HomeHeaderProps & React.HTMLAttributes<HTMLDivElement>
> = ({ heading, subHeading, showSocials, ...rest }) => {
  return (
    <StyledHomeHeader data-testid="homeHeaderTest" {...rest}>
      <StyledHeaderContent>
        <StyledHeaderTitle>
          <h1>
            {heading
              .split(" ")
              .map((word, i) =>
                i === 1 ? <span key={`${i}-${word}`}>{word}</span> : `${word} `
              )}
          </h1>
          <p>{subHeading}</p>
        </StyledHeaderTitle>
        {showSocials && (
          <StyledHeaderSocial>
            <p>
              <span>const</span> {`{ `}
            </p>
            <SocialIcons />
            <p>
              <span>{`}`}</span>
              <span>{` = `}</span>
              @MakingStuffs
            </p>
          </StyledHeaderSocial>
        )}
      </StyledHeaderContent>
    </StyledHomeHeader>
  );
};

const StyledHomeHeader = styled.header`
  height: calc(100 * var(--vh));
  max-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHeaderContent = styled.div`
  text-align: center;
  display: inline-flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.spacing.small.x};
`;

const StyledHeaderTitle = styled.div`
  h1 {
    font-family: "OleoScript";
    color: white;
    font-size: 3rem;
    display: inline-block;
    margin: 0;

    span {
      color: ${({ theme }) => theme.pallette.primary};
    }
  }

  p {
    font-family: RobotoMono;
    color: ${({ theme }) => theme.pallette.primary};
    opacity: 0.7;
    font-size: 0.8rem;
    margin-top: ${({ theme }) => theme.spacing.medium.y};
    margin: 0;
  }
`;

const StyledHeaderSocial = styled.div`
  font-family: RobotoMono;
  align-self: center;
  margin: calc(${({ theme }) => `${theme.spacing.large.y} * 3 ) 0 0`};
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  ul {
    justify-content: space-between;
    display: inline-flex;
    width: unset;
    height: auto;
    margin: 0 0.1rem;
    flex-wrap: nowrap;

    li {
      height: auto;
      display: inline-flex;
      margin: 0 0.1rem;

      &:first-child > a {
        margin-left: 0;
      }

      &:last-child > a {
        margin-right: 0;
      }

      a {
        display: inline-flex;
        align-items: center;
        height: 20px;
        width: 20px;
        background-color: ${({ theme }) => theme.pallette.secondary};

        border-radius: 50%;

        svg {
          margin: 0.3rem;
        }

        &[href*="facebook"] {
          background-color: ${({ theme }) => theme.pallette.facebook};
        }

        &[href*="github"] {
          background-color: ${({ theme }) => theme.pallette.github};
        }

        &[href*="linkedin"] {
          background-color: ${({ theme }) => theme.pallette.linkedin};
        }

        &[href*="twitter"] {
          background-color: ${({ theme }) => theme.pallette.twitter};
        }

        &[href*="freecodecamp"] {
          background-color: ${({ theme }) => theme.pallette.fcc};
        }

        &[href*="stackoverflow"] {
          background-color: ${({ theme }) => theme.pallette.stackoverflow};
        }
      }
    }
  }

  p {
    display: inline-block;
    margin: ${({ theme }) => theme.spacing.small.y} 0;
    flex-wrap: nowrap;
  }

  p:first-child,
  p:last-child {
    text-align: left;
  }

  p:first-child {
    margin-left: ${({ theme }) => `${theme.spacing.large.y} 0`};
    color: ${({ theme }) => theme.pallette.accent};
    span {
      color: ${({ theme }) => theme.pallette.secondary};
    }
  }

  p:last-child {
    margin-right: ${({ theme }) => `${theme.spacing.large.y} 0`};
    color: ${({ theme }) => theme.pallette.tertiary};
    span {
      color: ${({ theme }) => theme.pallette.accent};

      &:nth-child(2) {
        color: ${({ theme }) => theme.pallette.light};
      }
    }
  }
`;

export default HomeHeader;
