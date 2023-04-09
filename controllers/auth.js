const { response } = require("express");
const { validationResult } = require("express-validator");

const createUser = (req, res = response) => {

  const { name, email, password } = req.body;
  
  res.status(201).json({
    ok: true,
    msg: "register",
    name,
    email,
    password,
  });
};

const loginUser = (req, res = response) => {
  const { email, password } = req.body;
  
  res.status(201).json({
    ok: true,
    msg: "login",
    email,
    password,
  });
};

const revalidateToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: "renewar token",
  });
};
module.exports = {
  createUser,
  loginUser,
  revalidateToken,
};
