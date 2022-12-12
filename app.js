const express=require('express');
const app=express();
const PrRout= require('./API/V1/routes/product');
app.use("/product", PrRout);
app.get("/",(req,res)=>{
    res.status(200).json({"Message":" ecom-web-3"});
       });
    module.exports=app;