const Event = require('../models/eventModel');

const getEvents = async (req, res) => {
  const { id } = req.params;
  const events = await Event.find({ qrId: id });
  res.json(events);
};

module.exports = { getEvents };
