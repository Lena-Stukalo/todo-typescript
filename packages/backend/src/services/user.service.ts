/* eslint-disable import/no-extraneous-dependencies */
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import jwt from 'jsonwebtoken';
import { User } from '../entities/user.entity';
import { IUser, IUserLog, IUserReg, IUserReset } from '../types/user.type';
import { createVerifyEmail } from '../helpers/createVerifyMail';
import { sendMailTo } from '../helpers/sendEmail';
import { RequestError } from '../helpers/RequestError';

export default class UserService {
  async register(data: IUserReg) {
    const { password, email } = data;
    const hashPassword = await bcrypt.hash(password, 10);
    const verificationToken = uuid();
    const result = await User.create({
      ...data,
      password: hashPassword,
      verificationToken,
      verify: false,
      token: ''
    });
    const mail = createVerifyEmail(email, verificationToken, 'verify');

    await sendMailTo(mail);

    result.save();
    return {
      email: result.email,
      name: result.name
    };
  }

  async login(data: IUserLog) {
    const { email, password } = data;
    const user = await User.findOneBy({ email });
    const passwordCompare = await bcrypt.compare(password, user!.password);
    if (!passwordCompare) {
      throw RequestError(401, 'Email or password wrong');
    }
    const payload = {
      id: user!.id
    };
    const token = jwt.sign(payload, process.env.SECRET_KEY!, { expiresIn: '24h' });
    await User.update({ id: user!.id }, { token });
    return {
      token
    };
  }

  async current(user: IUser) {
    const { email, name } = user;
    return {
      email,
      name
    };
  }

  async logout(id: string) {
    await User.update({ id }, { token: '' });
    return {
      message: 'Logout success'
    };
  }

  async verify(id: string) {
    await User.update(id, {
      verify: true,
      verificationToken: ''
    });
    return {
      message: 'Verification success'
    };
  }

  async cangePassword(id: string, password: string) {
    const hashPassword = await bcrypt.hash(password, 10);
    await User.update(id, {
      password: hashPassword
    });
    return {
      message: 'Pasword change success'
    };
  }

  async sendResetPassword(data: IUserReset) {
    const { email, user } = data;
    const resetToken = uuid();
    const mail = createVerifyEmail(email, resetToken, 'resetpassword');
    await User.update(user.id, {
      verificationToken: resetToken
    });

    const result = await sendMailTo(mail);

    return result;
  }

  async resetPassword(id: string) {
    const hashPassword = await bcrypt.hash('aaaa', 10);
    await User.update(id, {
      verificationToken: '',
      password: hashPassword
    });
    return {
      message:
        "Reset password success. Your password changed to 'aaaa' Change it on a first opportunity"
    };
  }
}
