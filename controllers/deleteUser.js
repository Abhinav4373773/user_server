const pool = require("../db");


exports.deleteUser = async (req,res) =>
{
    try {
          const {id} = req.params;
          const deleteuser = await pool.query("DELETE FROM users WHERE user_id = $1",[id]);
          res.json({
            success:true,
            message:"User Deleted  Successfully.",
          })
    } catch (error) {
        console.log(error);
    }
}