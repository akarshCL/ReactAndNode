const express = require("express");
const productRoute = require("./routes/productRoute");
const cors=require("cors");
const userRouter = require("./routes/userRoute");
const { UserDB } = require("./database/dummyData");
const { authentication } = require("./auth/authorization");
const app=express();
const PORT=3000;
app.use(cors());

app.use(express.json());
app.use("/",(req,res)=>{
res.send("server is alive")
})
app.use("/product",authentication,productRoute)
app.use("/user",userRouter)

app.get("/api/user",(req,res)=>{
    res.send({userdata:UserDB})
})

app.get("/test",(req,res)=>{
    res.send("Its working Fine!!!!")
})
app.listen(PORT,()=>{
    console.log("server is running fine!!!!")
})