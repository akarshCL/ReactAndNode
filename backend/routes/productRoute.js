const { productControllerList, productControllerSingleData } = require("../controller/productController");

const productRoute=require("express").Router();


productRoute.get("/productList",productControllerList)
productRoute.get("/productList/:id",productControllerSingleData)
module.exports=productRoute;