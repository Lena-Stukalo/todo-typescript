/* eslint-disable prettier/prettier */
import { Response, Request, NextFunction } from 'express';
import { ErrorWithStatus } from '../types/error.type';

export const tryCatch = (contrl: Function) => (req: Request, res: Response, next: NextFunction) => {
    try {
        contrl(req, res, next);
    } catch (err) {
        const e = err as ErrorWithStatus;
        res.status(e.status).json(e.message);
    }
};
