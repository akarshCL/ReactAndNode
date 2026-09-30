const { products } = require("../database/dummyData")

const productControllerList = (req, res) => {

    try {
        let result = products;
        // let q = req.query;
        let { category } = req.query;
        // if (q.category) {
        //     result = products.filter(item => item.category.includes(q.category))
        //     if (result.length > 0) {
        //         return res.send(JSON.stringify(result))
        //     } else {
        //         res.send("Product not found")
        //     }
        // } 
        // else {
        //     return res.send(JSON.stringify(products))
        // }
        if (!category) {
            return res.send(JSON.stringify(result))
        }
        result = products.filter(item => item.category.includes(category))
        console.log(result,"result")
        if (!result.length) {
            return res.send("Product not found")
        }
        return res.send(JSON.stringify(result))
    } catch (err) {
        console.log(err)
    }
}


const productControllerSingleData = (req, res) => {
     try {
        let result = products;
        let { id } = req.params;
        if (!id) {
            return res.send("Something went Wrong")
        }
        result = products.find(item => item.id==id)
        console.log(result,"result")
        if (!result) {
            return res.send("Product not found")
        }
        return res.send(JSON.stringify(result))
    } catch (err) {
        console.log(err)
    }

}

module.exports = { productControllerList, productControllerSingleData }