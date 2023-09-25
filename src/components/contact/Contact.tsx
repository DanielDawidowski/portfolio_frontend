import { ReactElement, useState, ChangeEvent } from "react";
import type { FC } from "react";
import { motion } from "framer-motion";
import { ContactStyles, FormContainer } from "./ContactStyles";
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

const initialState: IContactData = {
  name: "",
  email: "",
  message: ""
};

const Contact: FC = (): ReactElement => {
  const [formData, setFormData] = useState<IContactData>(initialState);

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
      return response;
    } catch (error) {
      console.error("error: ", error);
      // Utils.dispatchNotification(errorMessage, "error", dispatch);
    }
  };

  return (
    <ContactStyles>
      <div id="contact" className="contact">
        <div className="contact__title">
          <motion.div
            ref={ref}
            animate={animation}
            initial="hidden"
            variants={variantLeft}
            className="line"
          ></motion.div>
          <motion.div ref={ref} animate={animation} initial="hidden" variants={variantRight} className="line">
            <h3 className="black-border">Contact</h3>
          </motion.div>
          <motion.div
            ref={ref}
            animate={animation}
            initial="hidden"
            variants={variantRight}
            className="line"
          ></motion.div>
        </div>
        <Container>
          <div className="contact__body">
            <motion.div
              className="contact__body--form"
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
              <FormContainer>
                <form onSubmit={handleSubmit}>
                  <motion.div
                    className="contact__body--form__item"
                    ref={ref}
                    initial="hidden"
                    animate={animation}
                    variants={variantLeft}
                  >
                    <div className="contact__body--form__item--icon">
                      <UserSVG />
                    </div>
                    <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} />
                  </motion.div>
                  <motion.div
                    className="contact__body--form__item"
                    ref={ref}
                    initial="hidden"
                    animate={animation}
                    variants={variantRight}
                  >
                    <div className="contact__body--form__item--icon">
                      <EmailSVG />
                    </div>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
                  </motion.div>
                  <motion.div
                    className="contact__body--form__item"
                    ref={ref}
                    initial="hidden"
                    animate={animation}
                    variants={variantLeft}
                  >
                    <div className="contact__body--form__item--icon">
                      <EnvelopeSVG />
                    </div>
                    <TextArea onChange={handleMessageChange} value={formData.message} />
                  </motion.div>

                  <Button color={ButtonColor.primary}>Send</Button>
                </form>
              </FormContainer>
              <motion.div
                className="contact__body--form__image"
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
              </motion.div>
            </motion.div>

            <motion.div
              className="contact__body--image"
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
            </motion.div>
          </div>
        </Container>
      </div>
    </ContactStyles>
  );
};

export default Contact;
