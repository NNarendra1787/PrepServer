const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    no: {
        type: Number,
        // required: true,
    },
    image: {
        type: String,
        // required : true,
    },
    title: {
        type: String,
        // required: true,
    },
    date: {
        type : String,
        // required : true,
    },
    date1: {
        type: String,
        // required: true,
    },
    pip: {
        type: String,
        // required: true,
    },
    part: {
        type: String,
        // required: true,
    },
    time : {
        type: String,
        // required: true,
    },
    due: {
        type: String,
        // required: true,
    }

})

const Product = mongoose.model("proData", ProductSchema);

module.exports = Product;