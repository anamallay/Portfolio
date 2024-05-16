import styled from "styled-components";
import { colors, screenSize, sizes } from "../../utils/var";
import { PrimaryButton } from "../../utils/utils";

export const Contact = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
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
export const ContactTitle = styled.h2`
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
export const ContactDescription = styled.p`
  font-size: ${sizes("sm")};
  max-width: 60ch;
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

export const ContactButton = styled(PrimaryButton)`
  font-size: ${sizes("sm")};
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
