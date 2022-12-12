//create object router
const router = require('express').Router();
const PrCtrl = require('../controlers/product');

router.get("/",PrCtrl.GetAllProducts);
router.get("/:id",PrCtrl.GetAllProductById);
router.put("/:id",PrCtrl.UpdateProduct);
router.post("/",PrCtrl.AddProduct);
router.delete("/:id",PrCtrl.DeleteProduct);


module.exports = router;