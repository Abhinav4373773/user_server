const express = require("express");
const router = express.Router();

//importing controllers
const {signup} = require("../controllers/createUser");
const {getUser} = require("../controllers/getUsers");
const {updateUser} = require("../controllers/updateUser");
const {deleteUser} = require("../controllers/deleteUser");



//mounting controllers
router.post("/POST/users/signup",signup);
router.get("/GET/users/:userId",getUser);
router.put("/PUT/users/:userId",updateUser);
router.delete("/DELETE/users/:userId",deleteUser);


//exporting routes
module.exports =router;