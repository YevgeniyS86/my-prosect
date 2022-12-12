module.exports={
    GetAllProducts:(req,res)=>{return res.status(200).json({Msg:"All Products"})},
    GetAllProductById:(req,res)=>{return res.status(200).json({Msg:"get product by id "+ req.params.id})},
    AddProduct:(req,res)=>{return res.status(200).json({Msg:"post product by id "})},
    DeleteProduct:(req,res)=>{return res.status(200).json({Msg:"delete product by id "+ req.params.id})},
    UpdateProduct:(req,res)=>{return res.status(200).json({Msg:"update product by id "+ req.params.id})}
};
