const cart = require("../Schema/CartSchema")
const product = require("../Schema/ProductSchema")

const addToCart = async(req, res)=>{
    const {user_id} = req.body;
    const _id = req.params.product_id;
    const data = await product.findOne({_id: _id});
    console.log(data);

    const result = await cart.create({
        user_id,
        data,
    });
    return res.send({msg: "product Added to Cart", result: result})
}

const fetchCartData = async (req, res)=>{
    const user_id = req.params.user_id;

    const user = await cart.find({user_id: user_id});
    return res.send(user);
};

const removeProduct = async(req, res)=>{
    const { user_id } = req.body;
    const _id = req.params.product_id;
    const data = await product.findOne({_id: _id})
    console.log(data);

    const result = await cart.deleteOne({_id: _id})

    return res.send({
        msg: "Products removed from cart",
        result: result,
    })
}

module.exports = {
    addToCart,
    fetchCartData,
    removeProduct
}