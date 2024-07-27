const express  = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config()

app.use(cors({origin:"*"}));

app.get('/',(req,res)=>{
    res.send("<h1>Hello</h1>");
});

app.listen(process.env.PORT,"0.0.0.0",()=>{
    console.log(`Listening to port ${process.env.PORT}`)
});