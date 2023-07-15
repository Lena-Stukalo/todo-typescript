/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import bodyParser from 'body-parser';
import express, { Request, Response, NextFunction } from 'express';
import 'dotenv/config';
import cors from 'cors';

import AppRouter from './routes';
import connectDB from './config/database';

const app = express();
const router = new AppRouter(app);
// Connect to MongoDB
connectDB();

// Express configuration

app.set('port', process.env.PORT || 4200);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
router.init();

const port = app.get('port');
// eslint-disable-next-line no-console
const server = app.listen(port, () => console.log(`Server started on port ${port}`));

export default server;
