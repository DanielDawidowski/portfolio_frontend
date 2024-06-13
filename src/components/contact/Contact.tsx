import { ReactElement, useState, ChangeEvent } from "react";
import type { FC } from "react";
import {
  ContactButton,
  ContactForm,
  ContactFormIcon,
  ContactFormImage,
  ContactFormItem,
  ContactImage,
  ContactStyles,
  ContactWrapper,
  ErrorMessage,
  SuccessMessage
} from "./ContactStyles";
import ContactImg from "../../assets/Images/contact/contact.png";
import PhoneImg from "../../assets/Images/contact/phone.png";
import Image from "../image/Image";
import Input from "../input/Input";
import TextArea from "../textarea/TextArea";
import Button from "../button/Button";
import { ButtonColor } from "../button/Button.interface";
import UserSVG from "../../assets/SVG/User";
import EmailSVG from "../../assets/SVG/Email";
import EnvelopeSVG from "../../assets/SVG/Envelope";
import { Container } from "../styles/globalStyles";
import { IContactData } from "./Contact.interface";
import { projectsVariants } from "../projects/ProjectsVariants";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { emailService } from "../../services/email";
import Line from "../line/Line";

const initialState: IContactData = {
  name: "",
  email: "",
  message: ""
};

const Contact: FC = (): ReactElement => {
  const [formData, setFormData] = useState<IContactData>(initialState);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const [ref, animation] = useScrollAnimation("300px");

  const variantLeft = projectsVariants(-72, "0%");
  const variantRight = projectsVariants(72, "200%");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMessageChange = (value: string) => {
    setFormData({ ...formData, message: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Perform form submission logic here
    try {
      const response = await emailService.sendMessage(formData);
      setFormData(initialState);
      setSuccess(true);
      return response;
    } catch (error) {
      setError(true);
      console.error("error: ", error);
      // Utils.dispatchNotification(errorMessage, "error", dispatch);
    }
  };

  return (
    <ContactStyles id="contact">
      <Line name={"Contact"} margin={"300px"} />
      <Container $small>
        <ContactWrapper>
          <ContactForm
            ref={ref}
            initial="hidden"
            animate={animation}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeInOut" }
              },
              hidden: { opacity: 0, y: 72 }
            }}
          >
            {success ? (
              <SuccessMessage>
                <h3 className="black-border">Email sent</h3>
              </SuccessMessage>
            ) : null}
            {error ? (
              <ErrorMessage>
                <h3 className="black-border">Error sending</h3>
              </ErrorMessage>
            ) : null}

            <form onSubmit={handleSubmit}>
              <ContactFormItem ref={ref} initial="hidden" animate={animation} variants={variantLeft}>
                <ContactFormIcon>
                  <UserSVG />
                </ContactFormIcon>
                <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} />
              </ContactFormItem>
              <ContactFormItem ref={ref} initial="hidden" animate={animation} variants={variantRight}>
                <ContactFormIcon>
                  <EmailSVG />
                </ContactFormIcon>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
              </ContactFormItem>
              <ContactFormItem ref={ref} initial="hidden" animate={animation} variants={variantLeft}>
                <ContactFormIcon>
                  <EnvelopeSVG />
                </ContactFormIcon>
                <TextArea onChange={handleMessageChange} value={formData.message} />
              </ContactFormItem>
              <ContactButton ref={ref} initial="hidden" animate={animation} variants={variantRight}>
                <Button color={ButtonColor.primary}>Send</Button>
              </ContactButton>
            </form>
            <ContactFormImage
              ref={ref}
              initial="hidden"
              animate={animation}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeInOut" }
                },
                hidden: { opacity: 0, y: 72 }
              }}
            >
              <Image src={PhoneImg} alt="Phone" />
            </ContactFormImage>
          </ContactForm>

          <ContactImage
            ref={ref}
            initial="hidden"
            animate={animation}
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, ease: "easeInOut" }
              },
              hidden: { opacity: 0, x: 72 }
            }}
          >
            <Image src={ContactImg} alt="Contact image" />
          </ContactImage>
        </ContactWrapper>
      </Container>
    </ContactStyles>
  );
};

export default Contact;
