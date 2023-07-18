import { Response, Request } from 'express';
import UserService from '../services/user.service';

export class UserController {
  // eslint-disable-next-line prettier/prettier
  constructor(private userService: UserService) { }

  async register(req: Request, res: Response) {
    const result = await this.userService.register(req.body);
    res.send(result);
  }

  async login(req: Request, res: Response) {
    const result = await this.userService.login(req.body);
    res.send(result);
  }

  async current(req: Request, res: Response) {
    const result = await this.userService.current(req.body.user);
    res.send(result);
  }

  async logout(req: Request, res: Response) {
    const result = await this.userService.logout(req.body.user.id);
    res.send(result);
  }

  async verify(req: Request, res: Response) {
    const result = await this.userService.verify(req.body.user.id);
    res.send(result);
  }

  async changePassword(req: Request, res: Response) {
    const result = await this.userService.cangePassword(req.body.user.id, req.body.password);
    res.send(result);
  }

  async sendResetPasword(req: Request, res: Response) {
    const result = await this.userService.sendResetPassword(req.body);
    res.send(result);
  }

  async resetPassword(req: Request, res: Response) {
    const result = await this.userService.resetPassword(req.body.user.id);
    res.send(result);
  }
}

const userController = new UserController(new UserService());
export default userController;
