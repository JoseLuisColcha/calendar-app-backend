const { Router } = require("express");
const { validateJWT } = require("../middlewares/validate");
const {
  createEvent,
  updateEvent,
  deleteEvent,
  getEvents,
} = require("../controllers/events");

const router = Router();

router.use(validateJWT);

//Obtener eventos
router.get("/", getEvents);

//Crear un nuevo evento
router.post("/", createEvent);

//Actualizar evento
router.put("/:id", updateEvent);

//Eliminar evento
router.delete("/:id", deleteEvent);

module.exports = router;
