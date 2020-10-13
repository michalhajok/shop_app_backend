const express = require("express");
const bcrypt = require("bcrypt");
const httpStatus = require("http-status");
const Auth = require("../models/Auth");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allUsers = await Auth.find();
    res.json(allUsers);
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const auth = await Auth.findOne({
      email: req.body.email,
    });
    if (auth) {
      if (bcrypt.compareSync(req.body.password, auth.password)) {
        res.status(httpStatus.OK).json(auth.email);
      } else {
        res.status(httpStatus.FORBIDDEN).json("bad password");
      }
    } else {
      res.status(httpStatus.FORBIDDEN).json("Bad user");
    }
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send(error);
  }
});

router.post("/register", async (req, res) => {
  const {
    email,
    password,
    name,
    lastname,
    sex,
    phone,
    birthday,
    city,
    address,
  } = req.body;

  const user = new Auth({
    email: email,
    password: bcrypt.hashSync(password, 10),
    name: name,
    lastname: lastname,
    sex: sex,
    phone: phone,
    birthday: birthday,
    city: city,
    address: address,
  });

  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).status(error);
  }
});

module.exports = router;
