const mongoose = require('mongoose')

const ExtraShema = new mongoose.Schema({
    no:{
        type: Number,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required:true,
    },


})

const Extra = mongoose.model("buyTest", ExtraShema)
module.exports = Extra