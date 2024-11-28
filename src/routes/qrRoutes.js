const express = require('express');
const { generateDynamicQR, updateDynamicQR, trackEvent } = require('../controllers/qrController');
const { authenticate } = require('../utils/auth');

const router = express.Router();

router.post('/generate', authenticate, generateDynamicQR);
router.put('/:id/update', authenticate, updateDynamicQR);
router.post('/:id/track', authenticate, trackEvent);

module.exports = router;
