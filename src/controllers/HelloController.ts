import * as express from 'express';



const helloRouter: express.Router = express.Router();
helloRouter.get('/',async function (req, res, next) {
    let testString = "hello!! connect success to backend !!!";
    res.json(testString);
})


export default helloRouter;