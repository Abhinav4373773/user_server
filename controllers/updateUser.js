const pool = require("../db");

exports.updateUser = async (req,res) => {
    try {
        const {userId} = req.params;
        const {name} = req.body;

        const update = await pool.query("UPDATE users SET user_name =$1 WHERE user_id = $2",[name,userId]);

        res.json({
            success:true,
            message:"updated successfully",
        })

    } catch (error) {
        console.log(error);
    }
}