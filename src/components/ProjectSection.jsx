import {
  Projects,
  ProjectButton,
  ProjectDescription1,
  ProjectDescription2,
  ProjectImgWrapper,
  ProjectTitle,
  ProjectsDescription,
  ProjectsTitle,
  Project,
  ProjectContainer,
  ProjectSubTitle,
  // ProjectContect1,
  // ProjectImages1,
  // ProjectContect2,
  // ProjectImages2,
  ProjectContect3,
  ProjectImages3,
  ProjectContect4,
  ProjectImages4,
  ProjectImages5,
  ProjectContect5,
  ProjectImages6,
  ProjectContect6,
} from "../assets/styles/ProjectStyled";
import {
  // Ecommerc_Backend,
  // Ecommerc_Frontend,
  Prayer_Time, Social_Media, Todo_list, Weather_App
} from "../utils/data";
import { Container } from "../utils/utils";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function ProjectSection() {
  return (
    <Container>
      <Projects>
        <ProjectsTitle>Projects</ProjectsTitle>
        <ProjectsDescription>
          Below are some of the projects I’ve worked on, showcasing my skills in
          full-stack web development. These projects highlight my proficiency in
          various technologies and my dedication to creating functional,
          user-friendly applications.
        </ProjectsDescription>
        <ProjectContainer>
          {/* Project 1 */}
          {/* <ProjectTitle>Ecommerc Frontend</ProjectTitle>
          <ProjectImages1>
            <ProjectImgWrapper>
              <LazyLoadImage
                alt="Ecommerce Frontend"
                src="/images/projects/EcommerceFrontend.png"
                height={"100%"}
                effect="blur"
                placeholderSrc="https://example.com/placeholder.jpg"
              />
            </ProjectImgWrapper>
          </ProjectImages1>
          <ProjectContect1>
            <Project>
              <ProjectSubTitle>Ecommerc Frontend</ProjectSubTitle>
              <ProjectDescription1>
                Deliver a seamless shopping experience with a robust e-commerce
                platform.
              </ProjectDescription1>
              <ProjectDescription2>
                A complete e-commerce platform built with React, Redux,
                TypeScript, and Material-UI, featuring management systems for
                users, categories, products, and orders for a full retail
                experience.
              </ProjectDescription2>
              <ProjectButton as="a" href={Ecommerc_Frontend} target="_blank">
                Website
              </ProjectButton>
            </Project>
          </ProjectContect1> */}
          {/* Project 2 */}
          {/* <ProjectTitle>Ecommerc Backend</ProjectTitle>
          <ProjectImages2>
            <ProjectImgWrapper>
              <LazyLoadImage
                src="/images/projects/EcommerceBackend.png"
                height={"100%"}
                effect="blur"
                alt="Ecommerce Frontend"
                placeholderSrc="https://example.com/placeholder.jpg"
              />
            </ProjectImgWrapper>
          </ProjectImages2>
          <ProjectContect2>
            <Project>
              <ProjectSubTitle>Ecommerc Backend</ProjectSubTitle>
              <ProjectDescription1>
                Power your online store with a secure and efficient backend
                system.
              </ProjectDescription1>
              <ProjectDescription2>
                A comprehensive eCommerce Backend API built with Node.js and
                TypeScript, offering secure user authentication, product
                management, order processing, and payment integration for a
                seamless online shopping experience.
              </ProjectDescription2>
              <ProjectButton as="a" href={Ecommerc_Backend} target="_blank">
                Website
              </ProjectButton>
            </Project>
          </ProjectContect2> */}
          {/* Project 3 */}
          <ProjectTitle>Weather App</ProjectTitle>
          <ProjectImages3>
            <ProjectImgWrapper>
              <LazyLoadImage
                src="/images/projects/Weather.png"
                height={"100%"}
                effect="blur"
                alt="Ecommerce Frontend"
                placeholderSrc="https://example.com/placeholder.jpg"
              />
            </ProjectImgWrapper>
          </ProjectImages3>
          <ProjectContect3>
            <Project>
              <ProjectSubTitle>Weather App</ProjectSubTitle>
              <ProjectDescription1>
                Discover the latest weather updates for Jizan city, Saudi
                Arabia, with a sleek and intuitive interface.
              </ProjectDescription1>
              <ProjectDescription2>
                A weather app made with React that shows the latest weather in
                Jizan city, Saudi Arabia. The app supports both English and
                Arabic languages, with easy language switching using i18n. It
                provides real-time weather updates and a user-friendly interface
                to ensure a seamless experience for users.
              </ProjectDescription2>
              <ProjectButton
                as="a"
                href={Weather_App}
                target="_blank">
                Website
              </ProjectButton>
            </Project>
          </ProjectContect3>
          {/* Project 4 */}
          <ProjectTitle>Todo list</ProjectTitle>
          <ProjectImages4>
            <ProjectImgWrapper>
              <LazyLoadImage
                src="/images/projects/Todo.png"
                height={"100%"}
                effect="blur"
                alt="Todo Project"
                placeholderSrc="https://example.com/placeholder.jpg"
              />
            </ProjectImgWrapper>
          </ProjectImages4>
          <ProjectContect4>
            <Project>
              <ProjectSubTitle>Todo list</ProjectSubTitle>
              <ProjectDescription1>
                Manage your daily tasks effortlessly with this dynamic and
                intuitive to-do list application.
              </ProjectDescription1>
              <ProjectDescription2>
                Developed a dynamic to-do list application using React. Features
                include task creation, editing, deletion, and categorization,
                helping users manage their daily tasks effectively
              </ProjectDescription2>
              <ProjectButton as="a" href={Todo_list} target="_blank">
                Website
              </ProjectButton>
            </Project>
          </ProjectContect4>
          {/* Project 5 */}
          <ProjectTitle>Social Media</ProjectTitle>
          <ProjectImages5>
            <ProjectImgWrapper>
              <LazyLoadImage
                src="/images/projects/socialmedia.png"
                height={"100%"}
                effect="blur"
                alt="Todo Project"
                placeholderSrc="https://example.com/placeholder.jpg"
              />
            </ProjectImgWrapper>
          </ProjectImages5>
          <ProjectContect5>
            <Project>
              <ProjectSubTitle>Social Media</ProjectSubTitle>
              <ProjectDescription1>
                Experience a full-fledged social media platform with features to
                connect and share with others.
              </ProjectDescription1>
              <ProjectDescription2>
                Developed a social media platform using HTML, CSS, JavaScript,
                and Bootstrap. Features include user registration, login,
                posting, deleting, and a personalized profile page displaying
                user information and posts. The platform utilizes an API for
                data management, with Axios handling API requests for smooth
                interactions.
              </ProjectDescription2>
              <ProjectButton as="a" href={Social_Media} target="_blank">
                Website
              </ProjectButton>
            </Project>
          </ProjectContect5>
          {/* Project 6 */}
          <ProjectTitle>prayer time</ProjectTitle>
          <ProjectImages6>
            <ProjectImgWrapper>
              <LazyLoadImage
                src="/images/projects/prayer.png"
                height={"100%"}
                effect="blur"
                alt="Todo Project"
                placeholderSrc="https://example.com/placeholder.jpg"
              />
            </ProjectImgWrapper>
          </ProjectImages6>
          <ProjectContect6>
            <Project>
              <ProjectSubTitle>prayer time</ProjectSubTitle>
              <ProjectDescription1>
                Stay updated with accurate prayer times for cities across Saudi
                Arabia.
              </ProjectDescription1>
              <ProjectDescription2>
                Developed a prayer time application using HTML, CSS, and
                JavaScript. The app features a drop-down list for Saudi cities,
                displaying prayer times for the selected city using the
                Aladhan.com API. Axios is used to handle API requests, ensuring
                up-to-date prayer information.
              </ProjectDescription2>
              <ProjectButton as="a" href={Prayer_Time} target="_blank">
                Website
              </ProjectButton>
            </Project>
          </ProjectContect6>
        </ProjectContainer>
      </Projects>
    </Container>
  );
}

export default ProjectSection;
