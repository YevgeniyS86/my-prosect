const express=require('express');
const app=express();
const morgan=require('morgan');
const PrRout= require('./API/V1/routes/product');
app.use(morgan('dev'));
app.use(function(req,res,next)
{
   const myip = req.socket.remoteAddress;
console.log("Connection from Ip" + req.socket.remoteAddress);
next();
});


app.use("/product", PrRout);

app.get("/",(req,res)=>{
    res.status(200).json({"Message":" ecom-web-3"});
       });
    module.exports=app;