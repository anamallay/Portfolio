/* eslint-disable react/no-unescaped-entities */

import {
  About,
  AboutContent,
  AboutDescription,
  AboutLine,
  AboutSubTitle,
  AboutTitle,
  ProfileImage,
  ProfileImageContainer,
  TechItem,
  TechList,
  TechologiesList,
} from "../assets/styles/AboutStyled";
import { Container } from "../utils/utils";
import "../assets/css/watermelon.css";

function AboutSection() {
  return (
    <Container>
      <About>
        <AboutContent>
          <AboutTitle>About</AboutTitle>
          <AboutDescription>
            Hello there! I'm Amal Khardli, a
            <strong> Frontend / Fullstack-MERN web developer</strong> based in
            Riyadh. Every day, I start my mornings with a cup of coffee, eagerly
            diving into code to build innovative web solutions that make a
            difference. I am dedicated to creating seamless user experiences and
            pushing the boundaries of web development.
          </AboutDescription>
          <AboutDescription>
            I hold a Bachelor’s degree in Computer Science and Information
            Technology from <a>Jazan University</a> and a certificate from the
            <a> Saudi Digital Academy</a> x Integrify Academy Software
            Development Bootcamp. My expertise spans a wide range of
            technologies, including React, Redux, Node.js, and more.
          </AboutDescription>
          <AboutLine />
          <AboutSubTitle>Technologies</AboutSubTitle>
          <TechologiesList>
            <TechList>
              <TechItem>JavaScript (ES6+)</TechItem>
              <TechItem>CSS</TechItem>
              <TechItem>HTML</TechItem>
            </TechList>
            <TechList>
              <TechItem>ReactJS</TechItem>
              {/* <TechItem>NextJS</TechItem> */}
              <TechItem>NodeJS</TechItem>
            </TechList>
          </TechologiesList>
        </AboutContent>
        <ProfileImageContainer>
          <ProfileImage src="images/watermelon.png" alt="Profile picture" />
        </ProfileImageContainer>
      </About>
    </Container>
  );
}

export default AboutSection;
