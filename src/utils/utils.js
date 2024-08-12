import styled from "styled-components";
import { colors, screenSize, sizes } from "./var";

export const PrimaryButton = styled.button`
  display: inline-block;
  text-transform: capitalize;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.05rem;
  font-size: ${(props) => props.fontSize || sizes("base")};
  background-color: ${colors("rose")};
  color: #f1f5f9;
  padding: 0.5em 1em;
  border-radius: 6px;
  box-shadow: 0 10px 20px rgba(225, 29, 72, 0.5),
    0 6px 6px rgba(225, 29, 72, 0.5), 0 0 100px -10px ${colors("rose")};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 28px rgba(225, 29, 72, 0.25),
      0 10px 10px rgba(225, 29, 72, 0.22), 0 0 120px -10px ${colors("rose")};
  }
  /* mobile first */
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

export const Container = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  /* margin-inline: auto; */
  /* padding-inline: 0.5rem; */

  /* mobile first */
  @media (min-width: ${screenSize("xs")}) {
    max-width: ${screenSize("xs")};
  }
  @media (min-width: ${screenSize("sm")}) {
    max-width: ${screenSize("sm")};
  }
  @media (min-width: ${screenSize("md")}) {
    max-width: ${screenSize("md")};
  }
  @media (min-width: ${screenSize("lg")}) {
    max-width: ${screenSize("lg")};
  }
  @media (min-width: ${screenSize("xl")}) {
    max-width: ${screenSize("xl")};
  }
  @media (min-width: ${screenSize("xxl")}) {
    max-width: ${screenSize("xxl")};
  }
`;
