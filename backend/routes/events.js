const express = require('express');
const router = express.Router();
require('dotenv').config();
const eventController = require('../controller/event');

router.post('/getEvent', eventController.getEvent);
router.post('/addEvent',eventController.addEvent);
router.put('/updateEvent',eventController.updateEvent);
router.delete('/deleteEvent',eventController.deleteEvent);
router.post('/addAvenue',eventController.addAvenue);


module.exports = router;