import * as express from 'express';
import {getAllProducts, createJsonProductRes} from '../../models/products';
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


 export default productRouter;