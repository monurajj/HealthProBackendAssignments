const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  qrId: { type: mongoose.Schema.Types.ObjectId, ref: 'QR' },
  timestamp: { type: Date, default: Date.now },
  location: { type: String },
  deviceInfo: { type: String }, 
  ipAddress: { type: String },
  userAgent: { type: String },
});

module.exports = mongoose.model('Event', eventSchema);
