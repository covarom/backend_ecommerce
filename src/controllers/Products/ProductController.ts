import * as express from 'express';
import {getAllProducts, createJsonProductRes, getProductByCategory,getProductById} from '../../models/products';
import {getProductImageById} from '../../models/product_img'

const productRouter: express.Router = express.Router();

productRouter.get('/getAllProduct',async function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    try {
    const productLists = await getAllProducts();
    if(!productLists){
        let message = 'Không tồn tại sản phẩm nào!'
        return res.status(200).json(message);
     }    
        const productItemList = productLists.map(async  product => {
            const img_list =  await getProductImageById(product.id)
            const productItem = await createJsonProductRes(product,img_list);  
            return productItem;
       });
       const productItemListRes = await Promise.all(productItemList)
         res.status(200).json(
            productItemListRes
        )
    } catch (er) {
        next(er)
    }
 })

 productRouter.get('/getProductByCategory',async function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    try {
        const categoryId = req.query.category_id;
        if(!categoryId){
            return res.status(401).json('Không được bỏ trống Category Id !');
        }
    const productLists = await getProductByCategory(categoryId);
    if(!productLists){
        let message = 'Không tồn tại sản phẩm nào!'
        return res.status(200).json(message);
     }    
        const productItemList = productLists.map(async  product => {
            const img_list =  await getProductImageById(product.id)
            const productItem = await createJsonProductRes(product,img_list);  
            return productItem;
       });
       const productItemListRes = await Promise.all(productItemList)
         res.status(200).json(
            productItemListRes
        )
    } catch (er) {
        next(er)
    }
 })


 productRouter.get('/getProductById',async function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    try {
        const id = req.query.id;
        if(!id){
            return res.status(401).json('Không được bỏ trống Id !');
        }
    const productLists = await getProductById(id);
    if(!productLists){
        let message = 'Không tồn tại sản phẩm nào!'
        return res.status(200).json(message);
     }    
        const productItemList = productLists.map(async  product => {
            const img_list =  await getProductImageById(product.id)
            const productItem = await createJsonProductRes(product,img_list);  
            return productItem;
       });
       const productItemListRes = await Promise.all(productItemList)
         res.status(200).json(
            productItemListRes
        )
    } catch (er) {
        next(er)
    }
 })


 export default productRouter;