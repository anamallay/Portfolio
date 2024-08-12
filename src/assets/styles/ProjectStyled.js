import styled from "styled-components";
import { colors, screenSize, sizes } from "../../utils/var";
import { PrimaryButton } from "../../utils/utils";

export const Projects = styled.div`
  margin-top: 10rem;
  text-align: center;


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
export const ProjectsTitle = styled.h2`
  font-size: ${sizes("2xl")};
  color: ${colors("light")};
  text-transform: capitalize;
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
export const ProjectsDescription = styled.p`
  max-width: 60ch;
  font-size: ${sizes("sm")};
  color: ${colors("slate600")};
  text-align: center;

  @media (min-width: ${screenSize("xs")}) {
    font-size: ${sizes("base")};
    margin: 1.5rem auto;
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
    margin: 2rem auto;
  }
  @media (min-width: ${screenSize("xxl")}) {
  }
`;

// - - - //
export const ProjectContainer = styled.div`
  @media (min-width: ${screenSize("xs")}) {
  }
  @media (min-width: ${screenSize("sm")}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      /* "image1 contect1"
      "contect2 image2" */
      "image3 contect3"
      "contect4 image4"
      "image5 contect5"
      "contect6 image6";
    place-items: center;
  }
  @media (min-width: ${screenSize("md")}) {
  }
  @media (min-width: ${screenSize("lg")}) {
  }
  @media (min-width: ${screenSize("xl")}) {
    width: 90%;
    margin: 0 auto;
  }
  @media (min-width: ${screenSize("xxl")}) {
  }
`;
export const Project = styled.div`
  &:not(:last-child) {
    margin-bottom: 5rem;
  }
  @media (min-width: ${screenSize("xs")}) {
  }
  @media (min-width: ${screenSize("sm")}) {
    padding: 0 1rem;
    &:not(:last-child) {
      margin-bottom: 0;
    }
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
export const ProjectTitle = styled.h3`
  font-size: ${sizes("base")};
  margin: 1rem auto;
  @media (min-width: ${screenSize("xs")}) {
    font-size: ${sizes("lg")};
    margin-bottom: 1.5rem;
  }
  @media (min-width: ${screenSize("sm")}) {
    display: none;
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

export const ProjectImgWrapper = styled.div`
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
export const ProjectSubTitle = styled.h3`
  display: none;
  @media (min-width: ${screenSize("xs")}) {
  }
  @media (min-width: ${screenSize("sm")}) {
    font-size: ${sizes("base")};
    display: block;
  }
  @media (min-width: ${screenSize("md")}) {
    font-size: ${sizes("lg")};
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
export const ProjectDescription1 = styled.p`
  font-size: ${sizes("sm")};
  color: ${colors("slate600")};
  margin: 1rem 0;

  @media (min-width: ${screenSize("xs")}) {
    font-size: ${sizes("base")};
    margin: 1.5rem 0;
  }
  @media (min-width: ${screenSize("sm")}) {
    font-size: ${sizes("xs")};
    margin: 1rem 0;
  }
  @media (min-width: ${screenSize("md")}) {
    font-size: ${sizes("sm")};
  }
  @media (min-width: ${screenSize("lg")}) {
    font-size: ${sizes("base")};
  }
  @media (min-width: ${screenSize("xl")}) {
    font-size: ${sizes("lg")};
  }
  @media (min-width: ${screenSize("xxl")}) {
  }
`;
export const ProjectDescription2 = styled.p`
  font-size: ${sizes("xs")};
  color: ${colors("slate400")};
  margin-bottom: 1rem;
  @media (min-width: ${screenSize("xs")}) {
    font-size: ${sizes("base")};
    margin: 1.5rem 0;
  }
  @media (min-width: ${screenSize("sm")}) {
    font-size: ${sizes("xs")};
    margin: 1rem 0;
  }
  @media (min-width: ${screenSize("md")}) {
    font-size: ${sizes("sm")};
  }
  @media (min-width: ${screenSize("lg")}) {
    font-size: ${sizes("base")};
  }
  @media (min-width: ${screenSize("xl")}) {
    font-size: ${sizes("lg")};
  }
  @media (min-width: ${screenSize("xxl")}) {
  }
`;

export const ProjectButton = styled(PrimaryButton)`
  font-size: ${sizes("sm")};
  @media (min-width: ${screenSize("xs")}) {
    font-size: ${sizes("base")};
  }
  @media (min-width: ${screenSize("sm")}) {
    font-size: ${sizes("xs")};
  }
  @media (min-width: ${screenSize("md")}) {
    font-size: ${sizes("sm")};
  }
  @media (min-width: ${screenSize("lg")}) {
    font-size: ${sizes("base")};
  }
  @media (min-width: ${screenSize("xl")}) {
    font-size: ${sizes("lg")};
  }
  @media (min-width: ${screenSize("xxl")}) {
  }
`;
// --- grid areas
// export const ProjectContect1 = styled.div`
//   grid-area: "content1";
// `;
// export const ProjectImages1 = styled.div`
//   grid-area: image1;
// `;
// export const ProjectContect2 = styled.div`
//   grid-area: "content2";
// `;
// export const ProjectImages2 = styled.div`
//   grid-area: image2;
// `;
export const ProjectContect3 = styled.div`
  grid-area: "content3";
`;
export const ProjectImages3 = styled.div`
  grid-area: image3;
`;
export const ProjectContect4 = styled.div`
  grid-area: "content4";
`;
export const ProjectImages4 = styled.div`
  grid-area: image4;
`;
export const ProjectContect5 = styled.div`
  grid-area: "content5";
`;
export const ProjectImages5 = styled.div`
  grid-area: image5;
`;
export const ProjectContect6 = styled.div`
  grid-area: "content6";
`;
export const ProjectImages6 = styled.div`
  grid-area: image6;
`;
