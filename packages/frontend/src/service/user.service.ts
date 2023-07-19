/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-useless-constructor */
import { HttpSerivce } from './http.service';
import { APP_KEYS } from '../modules/common/consts';
import { IUserChange, IUserLog, IUserReg, IUserReset } from '../modules/common/types/user.type';

export class UserService extends HttpSerivce {
    constructor() {
        super();
    }

    async currentUser() {
        return this.get({
            url: `${APP_KEYS.BACKEND_KEYS.USER}/current`
        });
    }

    register(user: IUserReg) {
        return this.post({
            url: `${APP_KEYS.BACKEND_KEYS.USER}/register`,
            data: user
        });
    }

    login(user: IUserLog) {
        return this.post({
            url: `${APP_KEYS.BACKEND_KEYS.USER}/login`,
            data: user
        });
    }

    async logOut() {
        return this.get({
            url: `${APP_KEYS.BACKEND_KEYS.USER}/logout`
        });
    }

    sendReset(user: IUserReset) {
        return this.patch({
            url: `${APP_KEYS.BACKEND_KEYS.USER}/resetpassword`,
            data: user
        });
    }

    changePass(user: IUserChange) {
        return this.patch({
            url: `${APP_KEYS.BACKEND_KEYS.USER}/changepassword`,
            data: user
        });
    }

    setToken(token:string) {
        this.tokenSet(token);
    }

    unSetToken() {
        this.tokenUnSet();
    }
}
export const userService = new UserService();
