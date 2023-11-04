const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
    },
    password:{
        type: String,
    },
    college:{
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    courses: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Course",

    },


})

const user = mongoose.model("userData", userSchema);

module.exports = user;