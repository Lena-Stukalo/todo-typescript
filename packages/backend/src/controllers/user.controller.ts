import { Response, Request } from 'express';
import { RequestWithUser } from '../types/request.type';
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

  async current(req: RequestWithUser, res: Response) {
    const result = await this.userService.current(req.user);
    res.send(result);
  }

  async logout(req: RequestWithUser, res: Response) {
    const result = await this.userService.logout(req.user);
    res.send(result);
  }

  async verify(req: RequestWithUser, res: Response) {
    const result = await this.userService.verify(req.user.id);
    res.send(result);
  }

  async changePassword(req: RequestWithUser, res: Response) {
    const result = await this.userService.cangePassword(req.user.id, req.body.password);
    res.send(result);
  }

  async sendResetPasword(req: RequestWithUser, res: Response) {
    const result = await this.userService.sendResetPassword(req.body);
    res.send(result);
  }

  async resetPassword(req: RequestWithUser, res: Response) {
    const result = await this.userService.resetPassword(req.body);
    res.send(result);
  }
}

const userController = new UserController(new UserService());
export default userController;
