const { productControllerList, DeleteProduct } = require("../controller/productController");

const productRoute=require("express").Router();


productRoute.get("/productList",productControllerList)
productRoute.delete("/deleteProductList",DeleteProduct)
module.exports=productRoute;