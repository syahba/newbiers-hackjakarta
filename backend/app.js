const apiRouter = require("./controller/apiController");
const uploadRouter = require("./controller/uploadController");
const express  = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
require("dotenv").config()
const app = express();

app.use(cors({origin:"*"}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan("combined"));

app.use('/api/product',apiRouter);
app.use('/api/upload',uploadRouter);

app.get('/',(req,res)=>{
    res.send("<h1>Hello</h1>");
});

app.listen(process.env.PORT,"0.0.0.0",()=>{
    console.log(`Listening to port ${process.env.PORT}`)
});