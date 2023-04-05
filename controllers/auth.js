const { response } = require("express");

const createUser = (req, res = express.response) => {
  res.json({
    ok: true,
    msg: "register",
  });
};

const loginUser = (req, res) => {
  res.json({
    ok: true,
    msg: "login",
  });
};

const revalidarToken = (req, res) => {
  res.json({
    ok: true,
    msg: "renewar token",
  });
};
module.exports = {
  createUser,
  loginUser,
  revalidarToken,
};
