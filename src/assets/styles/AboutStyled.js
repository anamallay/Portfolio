import styled from "styled-components";
import { colors, screenSize, sizes } from "../../utils/var";

export const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 5rem;
  @media (min-width: ${screenSize("xs")}) {
    gap: 1.5rem;
  }
  @media (min-width: ${screenSize("sm")}) {
  }
  @media (min-width: ${screenSize("md")}) {
  }
  @media (min-width: ${screenSize("lg")}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media (min-width: ${screenSize("xl")}) {
  }
  @media (min-width: ${screenSize("xxl")}) {
  }
`;
export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: ${screenSize("xs")}) {
    gap: 1.5rem;
  }
  @media (min-width: ${screenSize("sm")}) {
  }
  @media (min-width: ${screenSize("md")}) {
  }
  @media (min-width: ${screenSize("lg")}) {
  }
  @media (min-width: ${screenSize("xl")}) {
    gap: 2rem;
  }
  @media (min-width: ${screenSize("xxl")}) {
  }
`;

export const AboutTitle = styled.h2`
  font-size: ${sizes("2xl")};
  color: ${colors("light")};
  @media (min-width: ${screenSize("xs")}) {
    font-size: ${sizes("3xl")};
  }
  @media (min-width: ${screenSize("sm")}) {
  }
  @media (min-width: ${screenSize("md")}) {
  }
  @media (min-width: ${screenSize("lg")}) {
    font-size: ${sizes("4xl")};
  }
  @media (min-width: ${screenSize("xl")}) {
    font-size: ${sizes("5xl")};
  }
  @media (min-width: ${screenSize("xxl")}) {
  }
`;
export const AboutDescription = styled.p`
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
export const AboutLine = styled.hr`
  color: ${colors("slate800")};
  @media (min-width: ${screenSize("xs")}) {
  }
  @media (min-width: ${screenSize("sm")}) {
  }
  @media (min-width: ${screenSize("md")}) {
  }
  @media (min-width: ${screenSize("lg")}) {
  }
  @media (min-width: ${screenSize("xl")}) {
  }
  @media (min-width: ${screenSize("xxl")}) {
  }
`;
export const AboutSubTitle = styled.h3`
  font-size: ${sizes("sm")};
  color: ${colors("slate400")};
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
export const TechologiesList = styled.div`
  display: flex;
  @media (min-width: ${screenSize("xs")}) {
  }
  @media (min-width: ${screenSize("sm")}) {
  }
  @media (min-width: ${screenSize("md")}) {
  }
  @media (min-width: ${screenSize("lg")}) {
  }
  @media (min-width: ${screenSize("xl")}) {
  }
  @media (min-width: ${screenSize("xxl")}) {
  }
`;
export const TechList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  padding-left: 1em;
  flex: 1;

  @media (min-width: ${screenSize("xs")}) {
  }
  @media (min-width: ${screenSize("sm")}) {
  }
  @media (min-width: ${screenSize("md")}) {
  }
  @media (min-width: ${screenSize("lg")}) {
  }
  @media (min-width: ${screenSize("xl")}) {
  }
  @media (min-width: ${screenSize("xxl")}) {
  }
`;
export const TechItem = styled.li`
  font-size: ${sizes("sm")};
  color: ${colors("slate600")};
  &::before {
    content: "";
    background-image: url("./images/watermelon.png");
    background-size: 20px 20px;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 0.5rem;
    margin-left: -1.5rem;
    background-repeat: no-repeat;
  }
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
// images
export const ProfileImageContainer = styled.div`
  display: none;
  @media (min-width: ${screenSize("xs")}) {
  }
  @media (min-width: ${screenSize("sm")}) {
  }
  @media (min-width: ${screenSize("md")}) {
  }
  @media (min-width: ${screenSize("lg")}) {
    display: block;
  }
  @media (min-width: ${screenSize("xl")}) {
  }
  @media (min-width: ${screenSize("xxl")}) {
  }
`;
export const ProfileImage = styled.img`
  opacity: 0.09;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 0.2;
  }

  @media (min-width: ${screenSize("xs")}) {
  }
  @media (min-width: ${screenSize("sm")}) {
  }
  @media (min-width: ${screenSize("md")}) {
  }
  @media (min-width: ${screenSize("lg")}) {
  }
  @media (min-width: ${screenSize("xl")}) {
  }
  @media (min-width: ${screenSize("xxl")}) {
  }
`;
