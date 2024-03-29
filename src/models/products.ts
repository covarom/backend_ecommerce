import { db } from "../config/db_config";
const table = "products";

export async function getAllProducts() {
    var selectRows;
    var selectQuery = `SELECT * FROM ${table}`;
    selectRows = await db.query(selectQuery);
    return selectRows;
}

export async function getProductByCategory(idCate: string) {
    var selectRows;
    var selectQuery = `SELECT * FROM ${table} WHERE category_id = '${idCate}'`;
    selectRows = await db.query(selectQuery);
    return selectRows;
}

export async function getProductById(id: string) {
    var selectRows;
    var selectQuery = `SELECT * FROM ${table} WHERE id = '${id}'`;
    selectRows = await db.query(selectQuery);
    return selectRows;
}

export async function createJsonProductRes(product: any, imgList,category) {            
            var id = product.id; 
            var contents = {
                id: id, //ID
                name: product.name, 
                price: product.price, 
                sale: product.sale,  
                category,  
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
   
    return contents;
}

