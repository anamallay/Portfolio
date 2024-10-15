import "./assets/css/modernNormalize.css";
import HeaderSection from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturedSection from "./components/FeaturedSection";
// import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import { Element } from "react-scroll";
import GlobalStyle from "./assets/css/globalStyle";
import { ThemeProvider } from "styled-components";
import { getTheme } from "./utils/uiConfig";
import { useState } from "react";

function App() {
  const [themeMode, setThemeMode] = useState("dark");

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={getTheme(themeMode)}>
      <GlobalStyle />
      <HeaderSection toggleTheme={toggleTheme} />
      <HeroSection />
      <Element name="about">
        <AboutSection id="about" />
      </Element>
      <Element name="feature">
        <FeaturedSection />
      </Element>
      {/* <Element name="project"> */}
      {/* <ProjectSection /> */}
      {/* </Element> */}

      <Element name="contact">
        <ContactSection />
      </Element>
      <FooterSection />
    </ThemeProvider>
  );
}

export default App;
