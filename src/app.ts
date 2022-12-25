require('dotenv').config();
import express from 'express';
import helloRouter from './controllers/HelloController';
import loginRouter from './controllers/Auth/LoginController';
import registerRouter from './controllers/Auth/RegisterController';
import productRouter from './controllers/Products/ProductController';
import categoryRouter from './controllers/Products/CategoryController';
import cors from 'cors';
import {envConfig} from './config/env_config';

const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
// 👇️ handle uncaught exceptions
process.on('uncaughtException', function (err) {
    console.log(err);
  });

  app.use(bodyParser.json());


if (envConfig.NODE_ENV === "development") {
    app.use(cors());
}
app.disable('x-powered-by');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// app.use('/*', function (req: express.Request, res: express.Response, next: express.NextFunction) {
// });
app.use('/test', helloRouter);
app.use('/api',loginRouter);
app.use('/api',productRouter);
app.use('/api',registerRouter);
app.use('/api',categoryRouter);
const port = process.env.PORT || 3003
app.listen(port);
//console.log(process.env)

console.log('RESTful API server started on: localhost:' + port)
export default app;