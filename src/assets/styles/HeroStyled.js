import styled from "styled-components";
import { colors, screenSize, sizes } from "../../utils/var";
import { PrimaryButton } from "../../utils/utils";

export const Hero = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;
  @media (min-width: ${screenSize("xs")}) {
    gap: 1.5rem;
  }
  @media (min-width: ${screenSize("sm")}) {
  }
  @media (min-width: ${screenSize("md")}) {
  }
  @media (min-width: ${screenSize("lg")}) {
    gap: 2rem;
  }
  @media (min-width: ${screenSize("xl")}) {
  }
  @media (min-width: ${screenSize("xxl")}) {
  }
`;

export const Profile = styled.img`
  cursor: pointer;
  display: inline;
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  transition: box-shadow 0.3s ease-in-out;
  animation: pulse 2s infinite;
  /* &:hover {
    box-shadow: 0 14px 28px rgba(0, 128, 128, 0.25),
      0 14px 28px rgba(0, 128, 128, 0.22), 0 0 120px 5px ${colors("teal")};
  } */

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(225, 29, 72, 0.7);
    }
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }
    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
  @media (min-width: ${screenSize("xs")}) {
    width: 6.5rem;
    height: 6.5rem;
  }
  @media (min-width: ${screenSize("sm")}) {
  }
  @media (min-width: ${screenSize("md")}) {
  }
  @media (min-width: ${screenSize("lg")}) {
    width: 8rem;
    height: 8rem;
  }
  @media (min-width: ${screenSize("xl")}) {
    width: 10rem;
    height: 10rem;
  }
  @media (min-width: ${screenSize("xxl")}) {
  }
`;

export const Subtitle = styled.h2`
  text-transform: capitalize;
  color: ${colors("slate800")};
  font-size: ${sizes("base")};
  @media (min-width: ${screenSize("xs")}) {
    font-size: ${sizes("lg")};
  }
  @media (min-width: ${screenSize("sm")}) {
  }
  @media (min-width: ${screenSize("md")}) {
  }
  @media (min-width: ${screenSize("lg")}) {
    font-size: ${sizes("2xl")};
  }
  @media (min-width: ${screenSize("xl")}) {
    font-size: ${sizes("4xl")};
  }
  @media (min-width: ${screenSize("xxl")}) {
  }
`;
export const Title = styled.h2`
  text-transform: uppercase;
  color: ${colors("slate400")};
  font-size: ${sizes("4xl")};
  letter-spacing: 0.05em;
  line-height: 0.9;
  @media (min-width: ${screenSize("xs")}) {
    font-size: ${sizes("5xl")};
  }
  @media (min-width: ${screenSize("sm")}) {
  }
  @media (min-width: ${screenSize("md")}) {
  }
  @media (min-width: ${screenSize("lg")}) {
    font-size: ${sizes("7xl")};
  }
  @media (min-width: ${screenSize("xl")}) {
    font-size: ${sizes("9xl")};
  }
  @media (min-width: ${screenSize("xxl")}) {
  }
`;
export const Description = styled.p`
  max-width: 60ch;
  font-size: ${sizes("sm")};
  color: ${colors("slate600")};
  @media (min-width: ${screenSize("xs")}) {
    font-size: ${sizes("base")};
  }
  @media (min-width: ${screenSize("sm")}) {
  }
  @media (min-width: ${screenSize("md")}) {
  }
  @media (min-width: ${screenSize("lg")}) {
    font-size: ${sizes("lg")};
  }
  @media (min-width: ${screenSize("xl")}) {
    font-size: ${sizes("xl")};
  }
  @media (min-width: ${screenSize("xxl")}) {
  }
`;

export const HeroButton = styled(PrimaryButton)`
  font-size: ${sizes("sm")};
  @media (min-width: ${screenSize("xs")}) {
  }
  @media (min-width: ${screenSize("sm")}) {
  }
  @media (min-width: ${screenSize("md")}) {
  }
  @media (min-width: ${screenSize("lg")}) {
    font-size: ${sizes("lg")};
  }
  @media (min-width: ${screenSize("xl")}) {
    font-size: ${sizes("xl")};
  }
  @media (min-width: ${screenSize("xxl")}) {
  }
`;
