const Course = require()
const AddDataToCourse = async(req, res)=>{
    try {
        const data = req.body;
        const newData = await Course.create(data);
        res.status(200).send({ Client: newData });
      } catch (e) {
        res.status(500).send({ err: e });
      }

}
