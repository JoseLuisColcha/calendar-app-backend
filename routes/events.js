const { Router } = require("express");
const { validateJWT } = require("../middlewares/validate");
const {
  createEvent,
  updateEvent,
  deleteEvent,
  getEvents,
} = require("../controllers/events");
const { check } = require("express-validator");
const { fileValidator } = require("../middlewares/file-validator");
const { isDate } = require("../helpers/isDate");

const router = Router();

router.use(validateJWT);

//Obtener eventos
router.get("/", getEvents);

//Crear un nuevo evento
router.post(
  "/",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    fileValidator,
    check("end", "Fecha de finalización es obligatoria").custom(isDate),
    fileValidator,
  ],

  createEvent
);

//Actualizar evento
router.put("/:id", updateEvent);

//Eliminar evento
router.delete("/:id", deleteEvent);

module.exports = router;
