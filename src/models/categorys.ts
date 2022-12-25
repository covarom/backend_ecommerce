import { db } from "../config/db_config";
const table = "categorys";

export async function getAllCategorys() {
    var selectRows;
    var selectQuery = `SELECT * FROM ${table}`;
    selectRows = await db.query(selectQuery);
    return selectRows;
}

export async function createJsonRes(rows: any) {
    var contentsArr = [];
    if (rows && rows.length > 0) {       
        for (var i = 0; i < rows.length; i++) {
            var id = rows[i].id; 
            var contents = {
                id: id, //ID
                parent_id: rows[i].parent_id, 
                name: rows[i].name, 
                sort_order: rows[i].sort_order,  
                status: rows[i].status,  
                created_at: rows[i].created_at,  
                modified_at: rows[i].modified_at,  
            };
            contentsArr.push(contents);
        }
       
    } else {
        contentsArr = [];
    }
    return contentsArr;
}