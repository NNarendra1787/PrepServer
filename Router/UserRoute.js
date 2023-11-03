const { addToCart, fetchCartData, removeProduct } = require('../Controller/CartCont');
const { orderAdd, fetchAllOrder } = require('../Controller/OrderCont');
const { addProductsToDb, fetchData, deleteProd, addProducts } = require('../Controller/ProductsCont');
const { RegisterUser, LoginUser } = require('../Controller/UserCont');

const userRoute = require('express').Router();

userRoute.post("/reg", RegisterUser)
userRoute.post("/log", LoginUser)


userRoute.post("/addnewData", addProducts)
userRoute.post("/addData", addProductsToDb)
userRoute.get("/Data", fetchData)
userRoute.delete("/del", deleteProd)

//cart Wale 
userRoute.post("/addtoCart/:product_id", addToCart);
userRoute.get("/fetchCartdata/:user_id", fetchCartData)
userRoute.delete("/del/:product_id", removeProduct)


// Order wale
userRoute.post("/addOrder", orderAdd);
userRoute.get("/ordersdetail", fetchAllOrder)




module.exports = userRoute