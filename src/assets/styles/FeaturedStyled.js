import styled from "styled-components";
import { colors, screenSize, sizes } from "../../utils/var";

export const Featured = styled.div`
  margin-top: 10rem;
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

export const FeaturedSubTitle = styled.h3`
  font-size: ${sizes("sm")};
  color: ${colors("indigo")};
  text-transform: capitalize;
  font-weight: 400;
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
export const FeaturedWrapper = styled.h2`
  display: flex;
  align-items: center;
  gap: 1rem;
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
export const FeaturedTitle = styled.h2`
  font-size: ${sizes("2xl")};
  color: ${colors("light")};
  text-transform: uppercase;
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

export const FeaturedLink = styled.a`
  /* svg { */
  width: ${sizes("2xl")};
  height: ${sizes("2xl")};
  /* } */
  @media (min-width: ${screenSize("xs")}) {
    width: ${sizes("3xl")};
    height: ${sizes("3xl")};
  }
  @media (min-width: ${screenSize("sm")}) {
  }
  @media (min-width: ${screenSize("md")}) {
  }
  @media (min-width: ${screenSize("lg")}) {
    width: ${sizes("4xl")};
    height: ${sizes("4xl")};
  }
  @media (min-width: ${screenSize("xl")}) {
    width: ${sizes("5xl")};
    height: ${sizes("5xl")};
  }
  @media (min-width: ${screenSize("xxl")}) {
  }
`;
export const FeaturedDescription = styled.p`
  max-width: 60ch;
  font-size: ${sizes("sm")};
  color: ${colors("slate600")};
  margin: 1rem 0;
  @media (min-width: ${screenSize("xs")}) {
    font-size: ${sizes("base")};
    margin: 1.5rem 0;
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
    margin: 2rem 0;
  }
  @media (min-width: ${screenSize("xxl")}) {
  }
`;
export const FeaturedInfoContainer = styled.div`
  /* width: 85%; */
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  /* justify-content: space-between; */
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
export const FeaturedInfoSection = styled.div`
  flex: 1;
  min-width: 250px;
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
export const FeaturedLabel = styled.h3`
  font-size: ${sizes("base")};
  text-transform: capitalize;
  margin-bottom: 0.25em;
  @media (min-width: ${screenSize("xs")}) {
    font-size: ${sizes("lg")};
  }
  @media (min-width: ${screenSize("sm")}) {
  }
  @media (min-width: ${screenSize("md")}) {
  }
  @media (min-width: ${screenSize("lg")}) {
    font-size: ${sizes("xl")};
  }
  @media (min-width: ${screenSize("xl")}) {
    font-size: ${sizes("2xl")};
  }
  @media (min-width: ${screenSize("xxl")}) {
  }
`;
export const FeaturedTechStack = styled.ul`
  padding: 0;
  list-style: none;

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
export const FeaturedInfo = styled.li`
  font-size: ${sizes("sm")};
  color: ${colors("slate600")};
  text-transform: capitalize;
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
export const FeaturedImgContainer = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  @media (min-width: ${screenSize("xs")}) {
  }
  @media (min-width: ${screenSize("sm")}) {
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    margin-top: 1.5rem;
    grid-gap: 1.5rem;
  }
  @media (min-width: ${screenSize("md")}) {
  }
  @media (min-width: ${screenSize("lg")}) {
    margin-top: 2rem;
    grid-gap: 2rem;
  }
  @media (min-width: ${screenSize("xl")}) {
  }
  @media (min-width: ${screenSize("xxl")}) {
  }
`;
export const FeaturedImgWrapper = styled.div`
  position: relative;
  &::after {
    content: "";
    background-color: rgb(79, 70, 229, 0.6);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: background-color 0.3s ease-in-out;
  }
  &:hover::after {
    background-color: rgb(79, 70, 229, 0.3);
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
