const QRCode = require('qrcode');
const QR = require('../models/qrModel');
const Event = require('../models/eventModel');

// Generate Dynamic QR Code
const generateDynamicQR = async (req, res) => {
  const { initialUrl, ownerId } = req.body;

  const qr = await QR.create({ initialUrl, dynamicUrl: initialUrl, ownerId });
  const qrCode = await QRCode.toDataURL(qr._id.toString());

  res.json({ qrCode, dynamicQRId: qr._id });
};

//to Updating Dynamic QR Code URL
const updateDynamicQR = async (req, res) => {
  const { id } = req.params;
  const { newUrl } = req.body;

  const qr = await QR.findByIdAndUpdate(id, { dynamicUrl: newUrl }, { new: true });
  if (!qr) return res.status(404).json({ message: 'QR code not found' });

  res.json({ message: 'QR code updated successfully' });
};

// to track QR Code Scan Event
const trackEvent = async (req, res) => {
  const { id } = req.params;
  const { location, deviceInfo } = req.body;

  await Event.create({ qrId: id, location, deviceInfo });
  res.json({ message: 'Event tracked successfully' });
};

module.exports = { generateDynamicQR, updateDynamicQR, trackEvent };
