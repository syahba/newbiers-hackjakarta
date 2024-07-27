const express  = require("express");
const cors = require("cors");
require("dotenv").config()
const app = express();

app.use(cors({origin:"*"}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("<h1>Hello</h1>");
});

app.listen(process.env.PORT,"0.0.0.0",()=>{
    console.log(`Listening to port ${process.env.PORT}`)
});