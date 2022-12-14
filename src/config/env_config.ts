export const envConfig = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PROXY: process.env.PROXY,
    DB_USERNAME : process.env.DB_USERNAME,
    DB_PASSWORD : process.env.DB_PASSWORD,
    DB_NAME : process.env.DB_NAME,
    DB_HOST : process.env.DB_NAME,
    CONNECTION_STRING : process.env.CONNECTION_STRING,
}