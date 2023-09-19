import { ReactElement, useState, ChangeEvent } from "react";
import type { FC } from "react";
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

type IContactData = {
  name?: string;
  email?: string;
  message?: string;
};

const Contact: FC = (): ReactElement => {
  const [formData, setFormData] = useState<IContactData>({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMessageChange = (value: string) => {
    setFormData({ ...formData, message: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log(formData);
  };

  return (
    <ContactStyles>
      <div className="contact">
        <div className="contact__title">
          <div className="line"></div>
          <div className="line">
            <h3 className="black-border">Contact</h3>
          </div>
          <div className="line"></div>
        </div>
        <div className="container">
          <div className="contact__body">
            <div className="contact__body--form">
              <FormContainer>
                <form onSubmit={handleSubmit}>
                  <div className="contact__body--form__item">
                    <div className="contact__body--form__item--icon">
                      <UserSVG />
                    </div>
                    <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="contact__body--form__item">
                    <div className="contact__body--form__item--icon">
                      <EmailSVG />
                    </div>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="contact__body--form__item">
                    <div className="contact__body--form__item--icon">
                      <EnvelopeSVG />
                    </div>
                    <TextArea onChange={handleMessageChange} />
                  </div>

                  <Button color={ButtonColor.primary}>Send</Button>
                </form>
              </FormContainer>
              <div className="contact__body--form__image">
                <Image src={PhoneImg} alt="Phone" />
              </div>
            </div>

            <div className="contact__body--image">
              <Image src={ContactImg} alt="Contact image" />
            </div>
          </div>
        </div>
      </div>
    </ContactStyles>
  );
};

export default Contact;
