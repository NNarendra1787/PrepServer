const { RegisterUser, LoginUser } = require('../Controller/UserCont');

const userRoute = require('express').Router();

userRoute.post("/reg", RegisterUser)
userRoute.post("/log", LoginUser)

module.exports = userRoute