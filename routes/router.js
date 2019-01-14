const express = require('express');
const router = express.Router();
const handle = require('../controllers/handle');
const test = require('../controllers/test')
router.get('/getreservation', handle.getReservation);
router.post('/addreservation', handle.postReservation);
router.get('/test', test.getIndex);
// router.get('/test', test.getIndex);
// router.post('/test', test.postIndex);

//router.get('/reservation', ()=>console.log('router'))

module.exports = router;