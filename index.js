const express =require("express");
const app = express();
const pool = require("./db");
const cors =require("cors");

app.use(express.json());
app.use(cors());

const route = require("./routes/routers");
app.use("/api/v2",route);

app.listen(5000,() =>{
    console.log(`Server is started at ${5000}`);
})