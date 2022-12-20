import * as express from 'express';
import {getAccount,createJsonRes} from '../../models/accounts'
import jwt from 'jsonwebtoken';

const loginRouter: express.Router = express.Router();
loginRouter.post('/login',async function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
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
    const Users = await getAccount(email,pwd);
    if(!Users){
        let message = 'Sai email hoặc pwd'
        return res.status(401).json(message);
    }else{
        var accessToken;
        const data = req.body;
        const UserInforJson = await createJsonRes(Users);
        if(UserInforJson){
             accessToken = jwt.sign(data,process.env.ACCESS_TOKEN_SECRET,{expiresIn: '30m'})       
        }  
        res.json({
            'accessToken':accessToken,
            'UserInforJson':UserInforJson,
        })
    }
    } catch (er) {
        next(er)
    }
})

    function authenToken(req, res, next){
    const authorizationHeader = req.headers['authorization'];
    const token = authorizationHeader.split(' ')[1];
    if(!token){
        res.sendStatus(401);
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
        if(err) res.sendStatus(403);
        next()
    })
    }


export default loginRouter;