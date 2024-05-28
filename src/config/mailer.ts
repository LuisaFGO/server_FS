import nodemailer from 'nodemailer';
import { NODEMAILER_EMAIL, NODEMAILER_PASSWORD } from '../utils/environment';
import htmlTemplate from './template';

const createTransporter = () =>{
  const transporter =  nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: NODEMAILER_EMAIL,
      pass: NODEMAILER_PASSWORD
    }
  });
  return transporter;
};

export const sendEmail = async (name: string, phone: string, email: string, message: string) => {
  const transporter = createTransporter();
  const info = {
    from: `<${email}>`,
    to: NODEMAILER_EMAIL,
    subject: 'New message from the contact form',
    html: htmlTemplate(name, phone, email, message)
  };
  await transporter.sendMail(info);
};
