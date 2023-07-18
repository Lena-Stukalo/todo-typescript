/* eslint-disable import/no-extraneous-dependencies */
import nodemailer, { TransportOptions } from 'nodemailer';
import { IMail } from '../types/mail.type';

interface ITransport extends TransportOptions {
  host: string;
  port: number;
  auth: {
    user: string;
    path: string;
  };
}
const transporterOptions = {
  host: 'smtp-relay.brevo.com',
  port: 587,
  auth: {
    user: 'lena.s26367@gmail.com',
    path: process.env.SENDMAIL_API_KEY!
  }
} as unknown as ITransport;

export const sendMailTo = async (data: IMail) => {
  const transporter = nodemailer.createTransport(transporterOptions);

  const mail = { ...data, from: 'lena.s26367@gmail.com' };
  await transporter.sendMail(mail, () => 'Fail');
};
