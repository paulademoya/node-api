import {createPool} from 'mysql2/promise'
import{DB_PORT, DB_DATABASE,DB_PASSWORD,DB_USER,DB_HOST} from'./config.js'

export const pool = createPool({
    host:DB_HOST,
    user: DB_USER,
    password:DB_PASSWORD,
    database:DB_DATABASE,
    port: DB_PORT

})

