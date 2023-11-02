const { addProductsToDb, fetchData, deleteProd, addProducts } = require('../Controller/ProductsCont');
const { RegisterUser, LoginUser } = require('../Controller/UserCont');

const userRoute = require('express').Router();

userRoute.post("/reg", RegisterUser)
userRoute.post("/log", LoginUser)


userRoute.post("/addnewData", addProducts)
userRoute.post("/addData", addProductsToDb)
userRoute.get("/Data", fetchData)
userRoute.delete("/del", deleteProd)

module.exports = userRoute