import * as express from 'express';
import {getAccount,createJsonRes} from '../../models/accounts'
import jwt from 'jsonwebtoken';

const loginRouter: express.Router = express.Router();
loginRouter.post('/login',async function (req, res, next) {
    try {
        const email=req.body.email;
        const pwd = req.body.password;
    if(!email){
        let message = 'Không có email'
        res.status(400).send(message);
    }
    if(!pwd){
        let message = 'Không có password'
        res.status(400).send(message);
    }
    const User = getAccount(email,pwd);
    if(!User){
        let message = 'Sai email hoặc pwd'
        res.status(401).send(message);
    }else{
        const data = req.body;
        const accessToken = jwt.sign(data,process.env.ACCESS_TOKEN_SECRET,{expiresIn: '30m'})
        const UserInforJson = createJsonRes(User);
        res.json({
            'accessToken':accessToken,
            'UserInforJson':UserInforJson,
        })
    }
    } catch (er) {
        next(er)
    }
})




export default loginRouter;