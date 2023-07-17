import { Router } from 'express';
import { isVerifyExist } from '../../middlewares/IsVerifyExist.middleware';
import { authenticate } from '../../middlewares/authtanticate.middleware';
import userController from '../../controllers/user.controller';
import { tryCatch } from '../../middlewares/tryCatch.middleware';
import { isNotExist } from '../../middlewares/isNotExist.middleware';
import { User } from '../../entities/user.entity';
import { isVerify } from '../../middlewares/isVerify.middleware';
import { isUserExist } from '../../middlewares/isUserExist.middleware';

const userRouter: Router = Router();

userRouter.post(
  '/register',
  isNotExist(User),
  tryCatch(userController.register.bind(userController))
);
userRouter.post('/login', isVerify(User), tryCatch(userController.login.bind(userController)));
userRouter.get(
  '/current',
  authenticate(User),
  tryCatch(userController.current.bind(userController))
);
userRouter.get('/logout', authenticate(User), tryCatch(userController.logout.bind(userController)));
userRouter.get(
  '/verify/:Token',
  isVerifyExist(User),
  tryCatch(userController.verify.bind(userController))
);
userRouter.patch(
  '/changepassword',
  authenticate(User),
  tryCatch(userController.changePassword.bind(userController))
);
userRouter.post(
  '/resetpassword',
  isUserExist(User),
  tryCatch(userController.sendResetPasword.bind(userController))
);
userRouter.get(
  '/resetpassword/:Token',
  isVerifyExist(User),
  tryCatch(userController.resetPassword.bind(userController))
);

export default userRouter;
