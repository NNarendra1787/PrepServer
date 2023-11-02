const Product = require("../Schema/ProductSchema");


const addProducts = async (req, res)=>{
    try{

        const data = req.body;
        const newData = await Product.create(data);
        res.status(200).send({Client: newData})
    }catch(e){
        res.status(500).send({err: e})
    }
}
const addProductsToDb = async (req, res)=>{
    const data = req.body;
    const {no, title, image,date, date1, pip, part,time,due} = data;
    
    const Result = await Product.create({no, title, image,date, date1, pip, part,time,due}) 

    return res.send({msg: "User data has been Stored", Result: Result})
}

const fetchData = async (req, res)=>{
    const data = req.body;
    const result = await Product.find();
    return res.send({ Result: result})
}

const deleteProd = async (req, res)=>{
    const data = req.body;
    const result = await Product.deleteMany();
    return res.send({msg: "data has been deleted", Result: result})
}

module.exports = {
    addProducts,
    addProductsToDb,
    fetchData,
    deleteProd
}