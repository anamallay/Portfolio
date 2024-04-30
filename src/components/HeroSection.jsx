/* eslint-disable react/no-unescaped-entities */
import { Description, Hero, Profile, Subtitle, Title } from "../assets/styles/HeroStyled";
import { Container, PrimaryButton } from "../utils/utils";
import { sizes } from "../utils/var";

function HeroSection() {
  return (
    <Container>
        <Hero>
          <a href="https://www.linkedin.com/in/amalkhardli/" target="_blank">
            <Profile src="../../public/images/profile.jpeg" alt="profile" />
          </a>
          <Subtitle>hi, i'm amal 🍉</Subtitle>
          <Title>front-end <br /> web developer</Title>
          <Description>
            A Passionate <strong>Frontend/Fulllstack-Jamstack</strong> web
            developer and<strong> UI/UX</strong> enthusiast specialized in
            building stunning Pixel-Perfect interative websites/appications.
          </Description>
          <PrimaryButton fontSize={sizes("sm")} href="#resume">
            reach out
          </PrimaryButton>
        </Hero>
    </Container>
  );
}

export default HeroSection;
