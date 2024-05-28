import { Router } from 'express';
import { newEmail } from '../controllers/sendEmail.controller';

const router = Router();

router.post('/send_email', newEmail);

export default router;