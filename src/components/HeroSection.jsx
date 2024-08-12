/* eslint-disable react/no-unescaped-entities */
import {
  Description,
  Hero,
  HeroButton,
  Profile,
  Subtitle,
  Title,
} from "../assets/styles/HeroStyled";
import { Container } from "../utils/utils";

function HeroSection() {
  return (
    <Container>
      <Hero>
        <a
          href="https://www.linkedin.com/in/amalkhardli/"
          target="_blank"
          rel="noopener noreferrer">
          <Profile src="images/profile.jpeg" alt="profile" />
        </a>
        <Subtitle>hi, i'm amal </Subtitle>
        <Title>
          full-stack
          <br /> web developer
        </Title>
        <Description>
          Detail-oriented <strong>Computer Science</strong> graduate with
          expertise in <strong>Full-Stack Development</strong>, specializing in
          React, Node.js, and other modern technologies. Dedicated to crafting
          pixel-perfect, user-centric web applications and innovative tech
          solutions.
        </Description>

        <HeroButton target="_blank" as="a" href="https://github.com/anamallay">
          githab page
        </HeroButton>
      </Hero>
    </Container>
  );
}

export default HeroSection;
