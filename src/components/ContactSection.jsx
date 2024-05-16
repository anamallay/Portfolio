import {
  Contact,
  ContactButton,
  ContactDescription,
  ContactTitle,
} from "../assets/styles/ContactStyled";
import { Container } from "../utils/utils";

function ContactSection() {
  return (
    <Container>
      <Contact>
        <ContactTitle>Get In Contact</ContactTitle>
        <ContactDescription>
          Whether you are starting a project, have business inquiries, or just
          want to say hi, my inbox is always open. Feel free to reach out and I
          will get back to you as soon as possible.
        </ContactDescription>
        <ContactButton
          as="a"
          href="mailto:amalalikhardli@gmail.com"
          target="_blank">
          reach out
        </ContactButton>
      </Contact>
    </Container>
  );
}

export default ContactSection;
