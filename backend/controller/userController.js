const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretkey = "demo123"
const { UserDB } = require("../database/dummyData");





const genrateToken = (user) => {
    const token = jwt.sign({ user }, secretkey, { expiresIn: "7d" })

    return token

}
const login = async (req, res) => {
    try {

        let userData = req.body;

        console.log(userData);

        let result = UserDB.find(item => item.email == userData.email);
        if (!result) return res.send({ msg: "user is not registered" })
        const validate = await bcrypt.compare(userData.password, result.password);
        console.log(validate);
        if (!validate) {
            return res.status(404).send({
                msg: "creds are wrong"
            })
        }
        // delete userData["password"]
let tempdata={
   name: result["name"],
   email:result["email"],
   role:result["role"],

}
        const token = genrateToken(tempdata)


        return res.send({ msg: "loged in successfully", token: token })



    } catch (err) {
        console.log(err);
        return res.send({ msg: "something went wrong" })
    }
}

const signup = async (req, res) => {

    try {

        let userData = req.body;
        console.log(userData);
        let result = UserDB.find(item => item.email == userData.email);

        if (result) return res.send({ msg: "user already registered" })
        const haspassword = await bcrypt.hash(userData.password, 10);
        userData["password"] = haspassword;
        UserDB.push(userData)

        return res.send({
            msg: "successfully registered",
            userData: userData
        })



    } catch (err) {
        console.log(err);
        return res.send({ msg: "something went wrong" })
    }


}

module.exports = { login, signup }