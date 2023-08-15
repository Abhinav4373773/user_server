const Pool = require("pg").Pool;


const pool = new Pool({
    user:"postgres",
    password:"abc@123#A",
    host:"localhost",
    port:5432,
    database:"datausers"
});
module.exports= pool;