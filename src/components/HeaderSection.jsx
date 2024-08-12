import { useState } from "react";
import { sizes } from "../utils/var";
import { Container, PrimaryButton } from "../utils/utils";
import {
  Header,
  IconSun,
  Line,
  NavigationBar,
  NavigationLink,
  NavigationMenu,
  Overlay,
  WatermelonIcon,
} from "../assets/styles/HeaderStyled";
import { Link as ScrollLink } from "react-scroll";
// eslint-disable-next-line react/prop-types
function HeaderSection({ toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Container>
      <Header>
        <nav>
          <NavigationBar onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <WatermelonIcon
              viewBox="0 0 52.976 52.976"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <g>
                <path d="M44.558,0.755L43.852,0L18.745,25.107l1.509,5.028c0.065,0.608-0.37,1.236-1.014,1.446l-1.604,0.524l-0.478,1.479 c-0.334,1.036-1.051,1.773-1.964,2.065h-0.001c-0.327,0-1.297-0.634-1.817-0.975c-1.033-0.676-1.929-1.259-2.768-1.144 l-0.333,0.045L0,43.852l0.754,0.707c6.002,5.62,13.595,8.417,21.179,8.417c7.924,0,15.838-3.053,21.914-9.129 C55.738,31.955,56.051,13.027,44.558,0.755z M12.282,36.348c1.225,0.8,2.385,1.555,3.453,1.221 c1.583-0.494,2.796-1.723,3.328-3.371l0.163-0.509l0.635-0.207c1.6-0.523,2.614-2.121,2.36-3.717l-1.217-4.089L38.543,8.138 c3.683,3.677,5.679,8.246,5.786,13.268c0.123,5.743-2.373,11.603-6.847,16.077s-10.327,6.979-16.077,6.847 c-5.022-0.107-9.591-2.104-13.268-5.786l2.931-2.931C11.413,35.78,11.936,36.122,12.282,36.348z M42.433,42.432 c-10.88,10.879-28.055,11.397-39.545,1.36l3.855-3.855c4.01,3.999,9.153,6.275,14.62,6.391c0.149,0.003,0.298,0.005,0.447,0.005 c6.141,0,12.345-2.695,17.087-7.438c4.857-4.857,7.566-11.249,7.433-17.534c-0.117-5.466-2.392-10.61-6.392-14.62l3.855-3.855 C53.83,14.378,53.312,31.553,42.433,42.432z" />
                <circle cx="5.938" cy="18.422" r="1.5" />
                <circle cx="17.938" cy="40.422" r="1.5" />
                <circle cx="27.406" cy="27.053" r="1.5" />
                <circle cx="32.356" cy="22.103" r="1.5" />
                <circle cx="29.527" cy="39.074" r="1.5" />
                <circle cx="34.477" cy="34.124" r="1.5" />
                <circle cx="39.427" cy="29.174" r="1.5" />
                <circle cx="37.306" cy="17.153" r="1.5" />
                <circle cx="23.871" cy="37.659" r="1.5" />
                <circle cx="28.938" cy="32.422" r="1.5" />
                <circle cx="33.938" cy="27.422" r="1.5" />
                <circle cx="8.938" cy="28.422" r="1.5" />
                <circle cx="14.938" cy="20.422" r="1.5" />
                <circle cx="38.72" cy="22.81" r="1.5" />
              </g>
            </WatermelonIcon>
          </NavigationBar>
          <Overlay isOpen={isMenuOpen} onClick={closeMenu} />
          <NavigationMenu isOpen={isMenuOpen}>
            <ScrollLink to="about" smooth={true} duration={500}>
              <li>
                <NavigationLink onClick={closeMenu}>About</NavigationLink>
              </li>
            </ScrollLink>
            {/* <ScrollLink to="project" smooth={true} duration={500}>
              <li>
                <NavigationLink onClick={closeMenu}>Project</NavigationLink>
              </li>
            </ScrollLink> */}
            <ScrollLink to="contact" smooth={true} duration={500}>
              <li>
                <NavigationLink onClick={closeMenu}>Contact</NavigationLink>
              </li>
            </ScrollLink>
            <Line />
            <li>
              <IconSun onClick={toggleTheme}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              </IconSun>
            </li>
            <li>
              <PrimaryButton
                fontSize={sizes("xs")}
                href="pdf/CV.pdf"
                target="_blank"
                as="a">
                resume
              </PrimaryButton>
            </li>
          </NavigationMenu>
        </nav>
      </Header>
    </Container>
  );
}

export default HeaderSection;
