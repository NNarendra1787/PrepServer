const user = require("../Schema/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const saltRound = 10;
// const saltRound = process.env.SALTROUND;

const RegisterUser = async (req, res) => {
  const RgData = req.body;
  const { name, email, phone, password, college, year, userId } = RgData;
  const userData = await user.findOne({ email: email });

  if (userData) {
    return res.send({ msg: "User is alrady Registered" });
  } else {
    const salt = bcrypt.genSaltSync(saltRound);
    const hashPassword = bcrypt.hashSync(password, salt);
    const token = await jwt.sign({ email: email }, process.env.SCRETKEY, {
      expiresIn: "7d",
    });

    const tempObj = await user({
      name: name,
      email: email,
      phone: phone,
      password: hashPassword,
      college: college,
      year: year,
    });

    const result = await tempObj.save();
    return res.send({
      msg: "User registed successfully",
      userId: result._id,
      token: token,
      name: name,
      email: email,
      phone: phone,
      result: result,
    });
  }
};

const LoginUser = async (req, res) => {
  const logData = req.body;
  const { email, password } = logData;
  const userData = await user.findOne({ email: email });

  if (userData) {
    const hashPassword = userData.password;
    const validate = bcrypt.compareSync(password, hashPassword);
    const token = jwt.sign({ email: email }, process.env.SCRETKEY, {
      expiresIn: "30d",
    });

    if (validate) {
      return res.send({
        msg: "User login Successfully",
        token: token,
        userData: userData,
      });
    } else {
      return res.send({
        msg: "Invalide Credential",
      });
    }
  }

  if (!userData) {
    return res.send({
      msg: "User not registed please register first",
    });
  }
};

const Dashboard = (req, res) => {
  return res.send({
    result: "My name is Narendra and You are Verify",
  });
};

module.exports = {
  RegisterUser,
  LoginUser,
  Dashboard
};
