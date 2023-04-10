const { response } = require("express");
const Event = require("../models/Event");

const getEvents = (req, res = response) => {
  res.json({
    ok: true,
    msg: "Get events",
  });
};

const createEvent = async (req, res = response) => {
  const event = new Event(req.body);

  try {
    event.user = req.uid;
    
    const eventSave = await event.save();

    res.json({
      ok: true,
      event: eventSave,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Talk to the admin",
    });
  }
};

const updateEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: "Update event",
  });
};

const deleteEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: "Delete event",
  });
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
