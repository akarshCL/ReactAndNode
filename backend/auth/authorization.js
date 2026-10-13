const jwt=require("jsonwebtoken");
const secretkey = "demo123"

const authentication=(req,res,next)=>{
try{
    const data =req.headers;
    if(!data?.authorization) return res.status(401).send({msg:"please login first || token is not provided"});
    let getToken=data?.authorization.split(" ")[1]
    let decodeData=jwt.verify(getToken,secretkey);
    req.user=decodeData
    next();

}catch(err){
    console.log(err);
    return res.send ({msg:"Invalid Token"})
}

}



const authorization=(roleVerify)=>{
    return (req,res,next)=>{
console.log(req.user.user.role,"userss")
if(!req.user) return res.send({msg:"user is not logged in"})

    if(!roleVerify.includes(req.user.user.role)) return res.send({msg:"unauthorized person ||access"});

    next()
    }

}
module.exports={authentication,authorization}