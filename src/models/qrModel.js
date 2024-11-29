const mongoose = require('mongoose');

const qrSchema = new mongoose.Schema({
  initialUrl: { type: String, required: true },
  dynamicUrl: { type: String, required: true },
  totalScanned: { type: Number, default: 0 },
  uniqueUsers: { type: Number, default: 0 }, 
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  

//   i am adding a summery table

  scans: [
    {
      timestamp: { type: Date, default: Date.now },
      location: { type: String },
      deviceInfo: { type: String },
      ipAddress: { type: String },
      userAgent: { type: String },
    }
  ],

  timeTrends: { 
    dailyScans: { type: Map, of: Number },
    weeklyScans: { type: Map, of: Number },
  },

  geographicDistribution: {
    regions: { type: Map, of: Number },
  },

  deviceAnalysis: {
    platforms: { type: Map, of: Number },
  },
});

module.exports = mongoose.model('QR', qrSchema);
