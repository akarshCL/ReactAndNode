

const userRouter=require("express").Router();
const {login,signup}=require("../controller/userController")

userRouter.post("/signup",signup)
userRouter.post("/login",login)
module.exports=userRouter;