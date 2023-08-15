const pool = require("../db");


exports.getUser = async(req,res) => {
    try {
        const {userId} =req.params;
        
        const user = await pool.query("SELECT * FROM users WHERE user_id = $1",[userId]);
  
        res.json(user.rows[0]);
    } catch (error) {
        console.error(error);
    }
}