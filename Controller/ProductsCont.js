const Product = require("../Schema/ProductSchema");
const { createOrder } = require("../PaymentGet");

const addProducts = async (req, res) => {
  try {
    const data = req.body;
    const newData = await Product.create(data);
    res.status(200).send({ Client: newData });
  } catch (e) {
    res.status(500).send({ err: e });
  }
};
const addProductsToDb = async (req, res) => {
  const data = req.body;
  const { no, title, image, date, date1, pip, part, time, due } = data;

  const Result = await Product.create({
    no,
    title,
    image,
    date,
    date1,
    pip,
    part,
    time,
    due,
  });

  return res.send({ msg: "User data has been Stored", Result: Result });
};

const fetchData = async (req, res) => {
  const data = req.body;
  const result = await Product.find();
  return res.send({ Result: result });
};

const deleteProd = async (req, res) => {
  const data = req.body;
  const result = await Product.deleteMany();
  return res.send({ msg: "data has been deleted", Result: result });
};

async function newOrder(req, res) {
  try {
    const { cart } = req.body;
    const { response, httpStatusCode } = await createOrder(cart);
    res.status(httpStatusCode).json(response);
  } catch (error) {
    console.error("Failed to create Order", error);
    res.status(500).json({ error: "Failed to create order." });
  }
}

const orderCapture = async (req, res) => {
  try {
    const { orderID } = req.params;

    // console.log("OrderID:------------------------------", orderID);
    const { response, httpStatusCode } = await captureOrder(orderID);
    res.status(httpStatusCode).json(response);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to capture order." });
  }
};

module.exports = {
  addProducts,
  addProductsToDb,
  fetchData,
  deleteProd,
  newOrder,
  orderCapture
};
