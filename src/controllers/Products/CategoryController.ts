import * as express from 'express';
import {getAllCategorys, createJsonRes} from '../../models/categorys';


const categoryRouter: express.Router = express.Router();

categoryRouter.get('/getAllCategory',async function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    try {
    const categoryLists = await getAllCategorys();
    if(!categoryLists){
        let message = 'Không tồn tại danh mục nào!'
        return res.status(200).json(message);
     }    
        
     const categoryRes = await createJsonRes(categoryLists)
     res.json(
        categoryRes
    )
    } catch (er) {
        next(er)
    }
 })


export default categoryRouter;