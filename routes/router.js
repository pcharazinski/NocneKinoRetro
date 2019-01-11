const express = require('express');
const router = express.Router();
const handle = require('../controllers/handle');
router.get('reservation', handle.getReservation);


module.exports = router;