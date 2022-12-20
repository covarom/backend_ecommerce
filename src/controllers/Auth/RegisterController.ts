import * as express from 'express';
import {getAccountByEmail,registerUser} from '../../models/accounts'
import {coverTimeStamp} from '../../utils/coverTimestamp'
import { v4 as uuidv4 } from 'uuid';

const registerRouter: express.Router = express.Router();

registerRouter.post('/register',async function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    try {
        const fist_name=req.body.fist_name;
        const last_name=req.body.last_name;
        const email=req.body.email;
        const phone = req.body.phone;
        const pwd = req.body.password;
        const role = req.body.role;
        const User = await getAccountByEmail(email);
    if(User[0]){
        let message = 'Email đã được sử dụng!'
        return res.status(400).send(message);
    }
    if(!pwd){
        let message = 'Nhập passowrd!'
        return res.status(400).send(message);
    }
    const date = Date.now();
    const dateTimeStamp = coverTimeStamp (date);
    const id =uuidv4();
    const result = registerUser(id,email,pwd,fist_name,last_name,phone,role);

    if(result){
        let message = 'Register successfully !!!'
        return res.status(200).json(message);
    }
    let message = 'Register Again !!!'
    return res.status(200).json(message);
   
    } catch (er) {
        next(er)
    }
})


export default registerRouter;