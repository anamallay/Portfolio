import styled from "styled-components";
import { colors, screenSize, sizes } from "../../utils/var";

export const Footer = styled.div`
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
export const FooterTitle = styled.h3`
  font-size: ${sizes("xs")};
  font-weight: 400;
  color: ${colors("slate600")};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  user-select: none;
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
