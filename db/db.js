const mongoose = require("mongoose");

mongoose.set("strictQuery", true)

const url = "mongodb+srv://narendranarwade2002:Narendra2002@prep-demo.qygxe9b.mongodb.net/?retryWrites=true&w=majority"

const connect = async ()=>{
    try{
        console.log("trying to connect");
        await mongoose.connect(url);
        console.log("db is connected");
    }catch(err){
        console.log(err.message, "due to this occured");
    }
}

module.exports = connect;