import axios from "./axios";
import { IContactData } from "../components/contact/Contact.interface";

class EmailService {
  async sendMessage(body: IContactData) {
    const response = await axios.post("/contact", body);
    return response;
  }
}

export const emailService = new EmailService();
