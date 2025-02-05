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

// eslint-disable-next-line react/prop-types
const WatermelonIcon = ({ color = "#f43f5e" }) => (
  <svg
    viewBox="0 0 52.976 52.976"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="20px"
    height="20px"
    style={{ marginRight: "0.5rem", marginLeft: "-1.5rem" }}
  >
    <g>
      {/* Apply the fill color to the path */}
      <path
        d="M44.558,0.755L43.852,0L18.745,25.107l1.509,5.028c0.065,0.608-0.37,1.236-1.014,1.446l-1.604,0.524l-0.478,1.479 c-0.334,1.036-1.051,1.773-1.964,2.065h-0.001c-0.327,0-1.297-0.634-1.817-0.975c-1.033-0.676-1.929-1.259-2.768-1.144 l-0.333,0.045L0,43.852l0.754,0.707c6.002,5.62,13.595,8.417,21.179,8.417c7.924,0,15.838-3.053,21.914-9.129 C55.738,31.955,56.051,13.027,44.558,0.755z M12.282,36.348c1.225,0.8,2.385,1.555,3.453,1.221 c1.583-0.494,2.796-1.723,3.328-3.371l0.163-0.509l0.635-0.207c1.6-0.523,2.614-2.121,2.36-3.717l-1.217-4.089L38.543,8.138 c3.683,3.677,5.679,8.246,5.786,13.268c0.123,5.743-2.373,11.603-6.847,16.077s-10.327,6.979-16.077,6.847 c-5.022-0.107-9.591-2.104-13.268-5.786l2.931-2.931C11.413,35.78,11.936,36.122,12.282,36.348z M42.433,42.432 c-10.88,10.879-28.055,11.397-39.545,1.36l3.855-3.855c4.01,3.999,9.153,6.275,14.62,6.391c0.149,0.003,0.298,0.005,0.447,0.005 c6.141,0,12.345-2.695,17.087-7.438c4.857-4.857,7.566-11.249,7.433-17.534c-0.117-5.466-2.392-10.61-6.392-14.62l3.855-3.855 C53.83,14.378,53.312,31.553,42.433,42.432z"
        fill={color} // Apply the color here
      />
      {/* Apply the same color to circles */}
      <circle cx="5.938" cy="18.422" r="1.5" fill={color} />
      <circle cx="17.938" cy="40.422" r="1.5" fill={color} />
      <circle cx="27.406" cy="27.053" r="1.5" fill={color} />
      <circle cx="32.356" cy="22.103" r="1.5" fill={color} />
      <circle cx="29.527" cy="39.074" r="1.5" fill={color} />
      <circle cx="34.477" cy="34.124" r="1.5" fill={color} />
      <circle cx="39.427" cy="29.174" r="1.5" fill={color} />
      <circle cx="37.306" cy="17.153" r="1.5" fill={color} />
      <circle cx="23.871" cy="37.659" r="1.5" fill={color} />
      <circle cx="28.938" cy="32.422" r="1.5" fill={color} />
      <circle cx="33.938" cy="27.422" r="1.5" fill={color} />
      <circle cx="8.938" cy="28.422" r="1.5" fill={color} />
      <circle cx="14.938" cy="20.422" r="1.5" fill={color} />
      <circle cx="38.72" cy="22.81" r="1.5" fill={color} />
    </g>
  </svg>
);

// eslint-disable-next-line react/prop-types
const TechItemWithIcon = ({ children }) => (
  <TechItem>
    <WatermelonIcon />
    {children}
  </TechItem>
);
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
              <TechItemWithIcon>JavaScript (ES6+)</TechItemWithIcon>
              <TechItemWithIcon>TypeScript</TechItemWithIcon>
              <TechItemWithIcon>ReactJS</TechItemWithIcon>
            </TechList>
            <TechList>
              <TechItemWithIcon>Express</TechItemWithIcon>
              <TechItemWithIcon>NodeJS</TechItemWithIcon>
              <TechItemWithIcon>REST API</TechItemWithIcon>
            </TechList>
          </TechologiesList>
        </AboutContent>
        <ProfileImageContainer>
          <ProfileImage src="images/pic.jpg" alt="Profile picture" />
        </ProfileImageContainer>
      </About>
    </Container>
  );
}

export default AboutSection;
