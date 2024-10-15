import {
  Featured,
  FeaturedDescription,
  FeaturedImgContainer,
  FeaturedImgWrapper,
  FeaturedInfo,
  FeaturedInfoContainer,
  FeaturedInfoSection,
  FeaturedLabel,
  FeaturedLink,
  FeaturedSubTitle,
  FeaturedTechStack,
  FeaturedTitle,
  FeaturedWrapper,
} from "../assets/styles/FeaturedStyled";
import { Container } from "../utils/utils";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function FeaturedSection() {
  return (
    <Container>
      <Featured>
        <FeaturedSubTitle>featured project</FeaturedSubTitle>
        <FeaturedWrapper>
          <FeaturedTitle>Full Stack Digital Tests</FeaturedTitle>
          <FeaturedLink href="https://www.digitaltests.org/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
              />
            </svg>
          </FeaturedLink>
        </FeaturedWrapper>
        <FeaturedDescription>
          A complete quiz platform built with React, Redux, and TypeScript,
          allowing users to create, share, and take quizzes. It includes user
          authentication, quiz management, result tracking, and multi-language
          support for an engaging test-taking experience.
        </FeaturedDescription>
        <FeaturedInfoContainer>
          <FeaturedInfoSection>
            <FeaturedLabel>Tech stack</FeaturedLabel>
            <FeaturedTechStack>
              <FeaturedInfo>ReactJS (with TypeScript)</FeaturedInfo>
              <FeaturedInfo>TailwindCSS</FeaturedInfo>
              <FeaturedInfo>Redux Toolkit</FeaturedInfo>
              <FeaturedInfo>Express.js</FeaturedInfo>
              <FeaturedInfo>Node.js</FeaturedInfo>
              <FeaturedInfo>MongoDB (with Mongoose)</FeaturedInfo>
              <FeaturedInfo>JWT Authentication</FeaturedInfo>
              <FeaturedInfo>i18next</FeaturedInfo>
            </FeaturedTechStack>
          </FeaturedInfoSection>
          <FeaturedInfoSection>
            <FeaturedLabel>Project Type</FeaturedLabel>
            <FeaturedInfo as="p">
              MERN (MongoDB, Express.js, React, Node.js)
            </FeaturedInfo>
          </FeaturedInfoSection>
          <FeaturedInfoSection>
            <FeaturedLabel>Timeline</FeaturedLabel>
            <FeaturedInfo as="p">October 2024 - Present</FeaturedInfo>
          </FeaturedInfoSection>
        </FeaturedInfoContainer>
        <FeaturedImgContainer>
          <FeaturedImgWrapper>
            <LazyLoadImage
              alt="pic1"
              height={"100%"}
              effect="blur"
              src="./images/feature2/home.png"
              placeholderSrc="https://example.com/placeholder.jpg"
            />
          </FeaturedImgWrapper>
          <FeaturedImgWrapper>
            <LazyLoadImage
              alt="pic2"
              height={"100%"}
              effect="blur"
              src="./images/feature2/publice_quiz.png"
              placeholderSrc="https://example.com/placeholder.jpg"
            />
          </FeaturedImgWrapper>
          <FeaturedImgWrapper>
            <LazyLoadImage
              alt="pic2"
              height={"100%"}
              effect="blur"
              src="./images/feature2/profile.png"
              placeholderSrc="https://example.com/placeholder.jpg"
            />
          </FeaturedImgWrapper>
          <FeaturedImgWrapper>
            <LazyLoadImage
              alt="pic3"
              height={"100%"}
              effect="blur"
              src="./images/feature2/create_quiz.png"
              placeholderSrc="https://example.com/placeholder.jpg"
            />
          </FeaturedImgWrapper>
          <FeaturedImgWrapper>
            <LazyLoadImage
              alt="pic4"
              height={"100%"}
              effect="blur"
              src="./images/feature2/add_question.png"
              placeholderSrc="https://example.com/placeholder.jpg"
            />
          </FeaturedImgWrapper>
          <FeaturedImgWrapper>
            <LazyLoadImage
              alt="pic5"
              height={"100%"}
              effect="blur"
              src="./images/feature2/add_other_question.png"
              placeholderSrc="https://example.com/placeholder.jpg"
            />
          </FeaturedImgWrapper>
          <FeaturedImgWrapper>
            <LazyLoadImage
              alt="pic6"
              height={"100%"}
              effect="blur"
              src="./images/feature2/score.png"
              placeholderSrc="https://example.com/placeholder.jpg"
            />
          </FeaturedImgWrapper>
          <FeaturedImgWrapper>
            <LazyLoadImage
              alt="pic7"
              height={"100%"}
              effect="blur"
              src="./images/feature2/library.png"
              placeholderSrc="https://example.com/placeholder.jpg"
            />
          </FeaturedImgWrapper>
          <FeaturedImgWrapper>
            <LazyLoadImage
              alt="pic10"
              height={"100%"}
              effect="blur"
              src="./images/feature2/start_quiz.png"
              placeholderSrc="https://example.com/placeholder.jpg"
            />
          </FeaturedImgWrapper>
          <FeaturedImgWrapper>
            <LazyLoadImage
              alt="pic10"
              height={"100%"}
              effect="blur"
              src="./images/feature2/quiz_process.png"
              placeholderSrc="https://example.com/placeholder.jpg"
            />
          </FeaturedImgWrapper>
          <FeaturedImgWrapper>
            <LazyLoadImage
              alt="pic10"
              height={"100%"}
              effect="blur"
              src="./images/feature2/show_score.png"
              placeholderSrc="https://example.com/placeholder.jpg"
            />
          </FeaturedImgWrapper>
          <FeaturedImgWrapper>
            <LazyLoadImage
              alt="pic10"
              height={"100%"}
              effect="blur"
              src="./images/feature2/login.png"
              placeholderSrc="https://example.com/placeholder.jpg"
            />
          </FeaturedImgWrapper>
          <FeaturedImgWrapper>
            <LazyLoadImage
              alt="pic8"
              height={"100%"}
              effect="blur"
              src="./images/feature2/register.png"
              placeholderSrc="https://example.com/placeholder.jpg"
            />
          </FeaturedImgWrapper>
          <FeaturedImgWrapper>
            <LazyLoadImage
              alt="pic9"
              height={"100%"}
              effect="blur"
              src="./images/feature2/forget_password.png"
              placeholderSrc="https://example.com/placeholder.jpg"
            />
          </FeaturedImgWrapper>
        </FeaturedImgContainer>
      </Featured>
    </Container>
  );
}

export default FeaturedSection;
