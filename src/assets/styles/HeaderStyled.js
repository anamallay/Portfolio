import styled from "styled-components";
import { colors, screenSize, sizes } from "../../utils/var";

export const Header = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
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
export const Overlay = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(30, 41, 59, 0.8);
  z-index: 998;
`;
export const NavigationMenu = styled.ul`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  position: absolute;
  padding: 0;
  gap: 2rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 998;
  max-width: 100%;
  cursor: pointer;
  @media (min-width: ${screenSize("xs")}) {
  }
  @media (min-width: ${screenSize("sm")}) {
  }
  @media (min-width: ${screenSize("md")}) {
  }
  @media (min-width: ${screenSize("lg")}) {
    display: flex;
    flex-direction: row;
    position: static;
    transform: translate(0, 0);
  }
  @media (min-width: ${screenSize("xl")}) {
  }
  @media (min-width: ${screenSize("xxl")}) {
  }
`;

export const NavigationLink = styled.a`
  font-size: ${sizes("lg")};
  text-decoration: none;
  font-weight: 600;
  color: ${colors("slate400")};
  letter-spacing: 0.05em;
  transition: color 0.3s ease;
  &:hover {
    color: ${colors("rose")};
  }
  @media (min-width: ${screenSize("xs")}) {
  }
  @media (min-width: ${screenSize("sm")}) {
  }
  @media (min-width: ${screenSize("md")}) {
  }
  @media (min-width: ${screenSize("lg")}) {
    color: ${colors("slate600")};
    font-size: ${sizes("xs")};
  }
  @media (min-width: ${screenSize("xl")}) {
  }
  @media (min-width: ${screenSize("xxl")}) {
  }
`;

export const Line = styled.li`
  border: 1px solid ${colors("slate600")};
  padding-top: 1.5em;
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

export const IconSun = styled.button`
  display: block;
  color: ${colors("slate600")};
  width: ${sizes("base")};
  height: ${sizes("base")};
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

export const NavigationBar = styled.button`
  display: block;
  position: absolute; 
  top: 1rem; 
  right: 1rem; 
  z-index: 1000; 
  cursor: pointer;
  @media (min-width: ${screenSize("xs")}) {
  }
  @media (min-width: ${screenSize("sm")}) {
  }
  @media (min-width: ${screenSize("md")}) {
  }
  @media (min-width: ${screenSize("lg")}) {
    display: none;
  }
  @media (min-width: ${screenSize("xl")}) {
  }
  @media (min-width: ${screenSize("xxl")}) {
  }
`;

export const WatermelonIcon = styled.svg`
  fill: ${colors("slate600")};
  width: ${sizes("3xl")};
  height: ${sizes("3xl")};
  transition: color 0.3s ease;
  &:hover {
    fill: ${colors("rose")};
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
