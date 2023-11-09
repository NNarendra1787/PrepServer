const express = require('express')
const connect = require('./db/db')
const userRoute = require('./Router/UserRoute')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const Product = require('./Schema/ProductSchema')
dotenv.config()
const port = 2002

app.get('/', (req, res) => res.send('Hello World!'))

app.use(cors({
    origin: "*"
}))

const stripe = require("stripe")(
    "sk_test_51O9gy5SEFOzonOOAbUeOgYW14BmddCV2sk2iXMYk2iakJ1cF2bnZnx4tqgtgCLuWyaB0hOsuJhclPPfYn2KtL5Kn00oPy4WkyZ"
  );

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

app.post("/api/create-checkout-session", async (req, res) => {
    const { products } = req.body;
    console.log("This is my products",products)
    const lineItems = products.map((Product) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: Product.name,
        },
        unit_amount:Product.price * 100,
      },
      quantity: Product.quantity,
    }));
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      // success_url: "https://pb-clone-nitinrajputind.vercel.app/dashBoard",
      // cancel_url: "https://pb-clone-nitinrajputind.vercel.app/cancel",
      success_url: "https://prepbytes-demo.vercel.app/dashboard",
      cancel_url: "https://prepbytes-demo.vercel.app/cancle",
  
    });
    res.json({id:session.id})
  });