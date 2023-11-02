const express = require('express')
const connect = require('./db/db')
const userRoute = require('./Router/UserRoute')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const port = 2002

app.get('/', (req, res) => res.send('Hello World!'))

app.use(cors({
    origin: "*"
}))
app.use(express.json());
app.use("/user", userRoute)

app.listen(port, async() => {
    try{
        console.log(`Example app listening on port ${port}!`)
        await connect()
    }catch(err){
        console.log("Something was wrong", err.message);
    }
})