const express = require("express");
const productRoute = require("./routes/productRoute");
const cors=require("cors")
const app=express();
const PORT=3000;
app.use(cors());

app.use(express.json());

app.use("/product",productRoute)




app.get("/test",(req,res)=>{
    res.send("Its working Fine!!!!")
})
app.listen(PORT,()=>{
    console.log("server is running fine!!!!")
})