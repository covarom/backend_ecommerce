import { db } from "../config/db_config";
const table = "product_image";

export async function getProductImageById(product_id) {
    var selectRows;
    var selectQuery = `SELECT * FROM ${table} where product_id = '${product_id}'`;
    selectRows = await db.query(selectQuery);
    return selectRows;
}

