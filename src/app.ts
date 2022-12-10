require('dotenv').config();
import express from 'express';
import helloRouter from './controllers/HelloController';
import cors from 'cors';
import {envConfig} from './config/env_config';

const app = express();
app.use('/test', helloRouter);
const port = process.env.PORT || 3003
app.listen(port);
//console.log(process.env)
if (envConfig.NODE_ENV === "development") {
    app.use(cors());
}

console.log('RESTful API server started on: localhost:' + port)

export default app;

