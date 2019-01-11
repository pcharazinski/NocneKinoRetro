const express = require('express');
const router = express.Router();
const handle = require('../controllers/handle');
const test=require('../controllers/test')
router.get('/', handle.getReservation);
router.get('/test', test.getIndex);

router.get('/', ()=>console.log('router'))

module.exports = router;