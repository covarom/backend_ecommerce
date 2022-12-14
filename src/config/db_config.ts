require('dotenv').config();
const {createPool} = require('mysql2');

const pool = createPool({
    host: `${process.env.DB_HOST}`,
    user: `${process.env.DB_USERNAME}`,
    password: `${process.env.DB_PASSWORD}`,
    database: `${process.env.DB_NAME}`,
    connectionLimit:10
})


async function query(text: any) { 
    const row = await pool.promise().query(text)
    return row[0];
}



export const db = {
    query
}

