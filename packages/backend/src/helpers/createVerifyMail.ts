import { IMail } from '../types/mail.type';

export const createVerifyEmail = (email: string, Token: string, option: string): IMail => {
  const mail = {
    to: email,
    subject: `${option}`,
    html: `<a target="_blank" href="${process.env.BASE_URL}/api/auth/${option}/${Token}">Click me to ${option}</a>`,
    text: 'Nice to see you'
  };
  return mail;
};
