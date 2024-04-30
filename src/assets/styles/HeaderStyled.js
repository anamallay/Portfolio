import styled from "styled-components";
import { colors, screenSize, sizes } from "../../utils/var";

export const Header = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;
export const NavigationMenu = styled.ul`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  align-items: center;
  list-style: none;
  padding: 0;
  gap: 2rem;
  max-width: 100%;

  @media (min-width: ${screenSize("xs")}) {}
  @media (min-width: ${screenSize("sm")}) {}
  @media (min-width: ${screenSize("md")}) {}
  @media (min-width: ${screenSize("lg")}) {
    display: flex;
  }
  @media (min-width: ${screenSize("xl")}) {}
  @media (min-width: ${screenSize("xxl")}) {}
`;

export const NavigationLink = styled.a`
  font-size: ${sizes("xs")};
  text-decoration: none;
  font-weight: 600;
  color: ${colors("slate600")};
  letter-spacing: 0.05em;
  transition: color 0.3s ease;
  &:hover {
    color: ${colors("rose")};
  }
`;

export const Line = styled.li`
  border: 1px solid ${colors("slate600")};
  padding-top: 1.5em;
`;

export const IconSun = styled.button`
  display: block;
  color: ${colors("slate600")};
  width: ${sizes("base")};
  height: ${sizes("base")};
`;

export const NavigationBar = styled.button`
  display: block;
  @media (min-width: ${screenSize("xs")}) {}
  @media (min-width: ${screenSize("sm")}) {}
  @media (min-width: ${screenSize("md")}) {}
  @media (min-width: ${screenSize("lg")}) {
    display: none;
  }
  @media (min-width: ${screenSize("xl")}) {}
  @media (min-width: ${screenSize("xxl")}) {}
`;
export const WatermelonIcon = styled.svg`
  fill: ${colors("slate600")};
  width: ${sizes("3xl")};
  height: ${sizes("3xl")};
  transition: color 0.3s ease;
  &:hover {
    fill: ${colors("rose")};
  }
`;
