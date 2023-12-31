const { addToCart, fetchCartData, removeProduct } = require('../Controller/CartCont');
const { addExtra, checkAll } = require('../Controller/ExtraCont');
const { orderAdd, fetchAllOrder, fetchOrder } = require('../Controller/OrderCont');
const { addProductsToDb, fetchData, deleteProd, addProducts, newOrder, orderCapture } = require('../Controller/ProductsCont');
const { RegisterUser, LoginUser, Dashboard } = require('../Controller/UserCont');
const Product = require('../db/ProductData');

const userRoute = require('express').Router();

userRoute.get("/data", Product)

userRoute.post("/reg", RegisterUser)
userRoute.post("/log", LoginUser)


userRoute.post("/addnewData", addProducts)
userRoute.post("/addData", addProductsToDb)
userRoute.get("/Data", fetchData)
userRoute.delete("/del", deleteProd)


userRoute.post("/addnewExtra", addExtra)
userRoute.get("/check", checkAll)
//Dashborad
userRoute.get("/dashboard", Dashboard)

//cart Wale 
userRoute.post("/addtoCart/:product_id", addToCart);
userRoute.get("/fetchCartdata/:user_id", fetchCartData)
userRoute.delete("/del/:product_id", removeProduct)


// Order wale
userRoute.post("/addOrder", orderAdd);
userRoute.get("/ordersdetail", fetchAllOrder)
userRoute.get("/orderbyuser/:user_id", fetchOrder)


// Payment Wala Hai
userRoute.post("/api/orders", newOrder)

userRoute.post("/api/orders/:order_id/capture", orderCapture)


module.exports = userRoute