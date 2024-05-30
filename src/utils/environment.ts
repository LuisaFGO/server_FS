import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT;
export const NODEMAILER_EMAIL = process.env.NODEMAILER_EMAIL;
export const NODEMAILER_PASSWORD = process.env.NODEMAILER_PASSWORD;
export const FOR_EMAIL = process.env.FOR_EMAIL;
