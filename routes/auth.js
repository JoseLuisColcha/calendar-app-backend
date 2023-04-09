// Rutas de Usuarios / Auth
// host + /api/auth

const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();
const { fileValidator } = require("../middlewares/file-validator");
const {
  createUser,
  revalidateToken,
  loginUser,
} = require("../controllers/auth");
const { validateJWT } = require("../middlewares/validate");

router.post(
  "/new",
  [
    //middlewares
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe de ser de 6 caracteres").isLength({
      min: 6,
    }),

    fileValidator,
  ],
  createUser
);
router.post(
  "/",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe de ser de 6 caracteres").isLength({
      min: 6,
    }),
    fileValidator,
  ],
  loginUser
);

router.get("/renew", validateJWT, revalidateToken);

module.exports = router;
