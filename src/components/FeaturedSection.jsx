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
import 'react-lazy-load-image-component/src/effects/blur.css';

function FeaturedSection() {
  return (
    <Container>
      <Featured>
        <FeaturedSubTitle>featured project</FeaturedSubTitle>
        <FeaturedWrapper>
          <FeaturedTitle>ecommerce project</FeaturedTitle>
          <FeaturedLink href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
              />
            </svg>
          </FeaturedLink>
        </FeaturedWrapper>
        <FeaturedDescription>
          A complete ecommerce platform built with React, Redux, and TypeScript,
          featuring management systems for users, categories, products, and
          orders for a full retail experience.
        </FeaturedDescription>
        <FeaturedInfoContainer>
          <FeaturedInfoSection>
            <FeaturedLabel>Tech stack</FeaturedLabel>
            <FeaturedTechStack>
              <FeaturedInfo>TailwindCSS</FeaturedInfo>
              <FeaturedInfo>ReactJS</FeaturedInfo>
              <FeaturedInfo>React-Hook-Form</FeaturedInfo>
              <FeaturedInfo>NextJS</FeaturedInfo>
              <FeaturedInfo>Axios</FeaturedInfo>
              <FeaturedInfo>Supabase</FeaturedInfo>
              <FeaturedInfo>Stripe</FeaturedInfo>
            </FeaturedTechStack>
          </FeaturedInfoSection>
          <FeaturedInfoSection>
            <FeaturedLabel>Project Type</FeaturedLabel>
            <FeaturedInfo as="p">Fullstack-MERN</FeaturedInfo>
          </FeaturedInfoSection>
          <FeaturedInfoSection>
            <FeaturedLabel>Timeline</FeaturedLabel>
            <FeaturedInfo as="p">December 2022 - Present</FeaturedInfo>
          </FeaturedInfoSection>
        </FeaturedInfoContainer>
        <FeaturedImgContainer>
          <FeaturedImgWrapper>
            <LazyLoadImage
              alt="pic1"
              height={"100%"}
              effect="blur"
              src="./images/one.png"
              placeholderSrc="https://example.com/placeholder.jpg"
            />
          </FeaturedImgWrapper>
          <FeaturedImgWrapper>
            <LazyLoadImage
              alt="pic2"
              height={"100%"}
              effect="blur"
              src="./images/two.png"
              placeholderSrc="https://example.com/placeholder.jpg"
            />
          </FeaturedImgWrapper>
          <FeaturedImgWrapper>
            <LazyLoadImage
              alt="pic3"
              height={"100%"}
              effect="blur"
              src="./images/three.png"
              placeholderSrc="https://example.com/placeholder.jpg"
            />
          </FeaturedImgWrapper>
          <FeaturedImgWrapper>
            <LazyLoadImage
              alt="pic4"
              height={"100%"}
              effect="blur"
              src="./images/four.png"
              placeholderSrc="https://example.com/placeholder.jpg"
            />
          </FeaturedImgWrapper>
          <FeaturedImgWrapper>
            <LazyLoadImage
              alt="pic5"
              height={"100%"}
              effect="blur"
              src="./images/five.png"
              placeholderSrc="https://example.com/placeholder.jpg"
            />
          </FeaturedImgWrapper>
          <FeaturedImgWrapper>
            <LazyLoadImage
              alt="pic6"
              height={"100%"}
              effect="blur"
              src="./images/six.png"
              placeholderSrc="https://example.com/placeholder.jpg"
            />
          </FeaturedImgWrapper>
          <FeaturedImgWrapper>
            <LazyLoadImage
              alt="pic7"
              height={"100%"}
              effect="blur"
              src="./images/seven.png"
              placeholderSrc="https://example.com/placeholder.jpg"
            />
          </FeaturedImgWrapper>
          <FeaturedImgWrapper>
            <LazyLoadImage
              alt="pic8"
              height={"100%"}
              effect="blur"
              src="./images/eight.png"
              placeholderSrc="https://example.com/placeholder.jpg"
            />
          </FeaturedImgWrapper>
          <FeaturedImgWrapper>
            <LazyLoadImage
              alt="pic9"
              height={"100%"}
              effect="blur"
              src="./images/nine.png"
              placeholderSrc="https://example.com/placeholder.jpg"
            />
          </FeaturedImgWrapper>
          <FeaturedImgWrapper>
            <LazyLoadImage
              alt="pic10"
              height={"100%"}
              effect="blur"
              src="./images/ten.png"
              placeholderSrc="https://example.com/placeholder.jpg"
            />
          </FeaturedImgWrapper>
        </FeaturedImgContainer>
      </Featured>
    </Container>
  );
}

export default FeaturedSection;
