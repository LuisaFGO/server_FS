import { Request, Response } from 'express';
import { sendEmail } from '../config/mailer';

export const newEmail = async (req: Request, res: Response) => {
  const { name, phone, email, message } = req.body;

  if (!name || !phone || !email || !message) {
    return res.status(400).send('Missing required fields');
  }
  try {
    await sendEmail(name, phone, email, message);
    res.status(200).send('Mail sent successfully');
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};