const pool = require("../db");
const bcrypt = require("bcrypt");
const jwt =require("jsonwebtoken");


exports.signup = async (req,res) => { 
  try {
    const {name,email,password} = req.body;
    
    const user = await  pool.query("SELECT * FROM users WHERE user_email = $1",[email]);

   if(user.rows.length !== 0)
   {
    return res.status(401).json({
      success:false,
      message:"user already exists",
    });
   }  

   let hashpassword;
   try {
    hashpassword=await bcrypt.hash(password,10);
   } catch (err) {
    console.error(err);
    return res.json({
      success:false,
      message:"Error occured while hashing password",
    });
   }

   const newuser = await pool.query("INSERT INTO users (user_name,user_email,user_password) VALUES ($1,$2,$3)",[name,email,hashpassword]);

   res.json({
    success:true,
    message:"Successfully user created",
   });
} catch (error) {
    console.error(error);
    console.log(error);
  }    
}