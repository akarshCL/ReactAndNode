const { authentication, authorization } = require("../auth/authorization");
const { productControllerList, productControllerSingleData,createProduct } = require("../controller/productController");

const productRoute=require("express").Router();


productRoute.get("/productList",productControllerList)
productRoute.get("/productList/:id",productControllerSingleData);


productRoute.post("/create",authorization(["admin"]),createProduct)


productRoute.post("/create",authorization(["retailer"]),createProduct)
module.exports=productRoute;