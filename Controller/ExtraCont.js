const Extra = require("../Schema/ExtraSchema");

const addExtra = async (req, res) => {
  try {
    const data = req.body;
    const newData = await Extra.create(data);
    res.status(200).send({ Client: newData });
  } catch (e) {
    res.status(500).send({ err: e });
  }
};

const checkAll = async (req, res) => {
  const data = req.body;
  const result = await Extra.find();
  return res.send(result);
};

module.exports = {
  addExtra,
  checkAll
};
