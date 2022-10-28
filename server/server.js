const express=require('express');
const mongoose=require('mongoose');
require('dotenv').config();
const cors=require('cors');
const app=express();
const routeURLS=require('./routes/routes')

//connect to mongodb
mongoose.connect(process.env.DB_URL,()=>console.log("database connected"))
app.use(express.json())
app.use(cors())

//using routes from routes.js
app.use("/newsblog",routeURLS);

if(process.env.NODE_ENV==="production"){
    app.use(express.static("client/build"));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"client","build","index.html"));
    })
}

//defining port to listen
const port=process.env.PORT||4000;
app.listen(port,console.log(`serve at port ${port}`))

//remove .get url