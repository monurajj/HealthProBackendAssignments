const mongoose = require('mongoose');

const qrSchema = new mongoose.Schema({
  initialUrl: { type: String, required: true },
  dynamicUrl: { type: String, required: true },
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('QR', qrSchema);
