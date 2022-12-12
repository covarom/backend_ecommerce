require('dotenv').config();
import express from 'express';
import helloRouter from './controllers/HelloController';
import loginRouter from './controllers/Auth/LoginController';
import cors from 'cors';
import {envConfig} from './config/env_config';
const app = express();
app.disable('x-powered-by');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/*', function (req: express.Request, res: express.Response, next: express.NextFunction) {
});
app.use('/test', helloRouter);
app.use('/api',loginRouter);
const port = process.env.PORT || 3003
app.listen(port);
//console.log(process.env)
if (envConfig.NODE_ENV === "development") {
    app.use(cors());
}
console.log('RESTful API server started on: localhost:' + port)
export default app;