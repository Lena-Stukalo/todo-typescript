/* eslint-disable import/no-extraneous-dependencies */
import * as sgMail from '@sendgrid/mail';
import { IMail } from '../types/mail.type';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export const sendMail = async (data: IMail) => {
  const mail = { ...data, from: 'lena.s26367@gmail.com' };
  await sgMail
    .send(mail)
    .then(() => 'Success')
    .catch(() => 'Fail');
};
