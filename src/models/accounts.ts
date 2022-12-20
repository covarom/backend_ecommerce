import { db } from "../config/db_config";
const table = "accounts";
export async function getAccount(email:string,password:string) {
    var selectRows;
    var selectQuery = `SELECT * FROM ${table} where email = '${email}' and password = '${password}'`;
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
                email: rows[i].email, 
                first_name: rows[i].first_name, 
                last_name: rows[i].last_name,  
                address: rows[i].address,  
                phone: rows[i].phone,  
                status: rows[i].status,  
                rode_id: rows[i].rode_id,  
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