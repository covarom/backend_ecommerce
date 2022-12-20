import { db } from "../config/db_config";
const table = "products";

export async function getAllProducts() {
    var selectRows;
    var selectQuery = `SELECT * FROM ${table}`;
    selectRows = await db.query(selectQuery);
    return selectRows;
}

export async function createJsonProductRes(product: any, imgList) {
    var contentsArr = [];              
            var id = product.id; 
            var contents = {
                id: id, //ID
                name: product.name, 
                price: product.price, 
                sale: product.sale,  
                category_id: product.category_id,  
                imageList: imgList,
                content: product.content,  
                quantity: product.quantity,  
                kg: product.kg,  
                supplier: product.supplier,  
                buyed: product.buyed,  
                status: product.status,  
                created_at: product.created_at,  
                modified_at: product.modified_at,  
            };
            contentsArr.push(contents);     
    return contentsArr;
}
export async function createJsonProductListRes(product: any) {
    var contentsArr = [];                   
            var contents = {
                product
            };
            contentsArr.push(contents);     
    return contentsArr;
}
