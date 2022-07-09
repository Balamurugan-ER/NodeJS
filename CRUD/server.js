const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

//parse request of content-type - application/json
app.use(express.json());
//parse request of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true }));

//routes

app.get("/",(req,res)=>{
    res.json({message: "Welcome to Balamurugan Application"});
});
//set port , listen for requests

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`
        SERVER IS RUNNING ON PORT ${PORT}.
    `)
})