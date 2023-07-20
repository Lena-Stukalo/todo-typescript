/* eslint-disable import/no-extraneous-dependencies */
import nodemailer, { TransportOptions } from 'nodemailer';
import { IMail } from '../types/mail.type';

interface ITransport extends TransportOptions {
  service: string;
  auth: {
    user: string;
    pass: string;
  };
  tls: {
    rejectUnauthorized: boolean;
  };
}
const transporterOptions = {
  service: 'gmail',
  auth: {
    user: 'lena.s26367@gmail.com',
    pass: process.env.SENDMAIL_API_KEY
  },
  tls: {
    rejectUnauthorized: false
  }
} as unknown as ITransport;

export const sendMailTo = async (data: IMail) => {
  const transporter = nodemailer.createTransport(transporterOptions);

  const mail = { ...data, from: 'lena.s26367@gmail.com' };
  await transporter.sendMail(mail, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
    }
  });
};
