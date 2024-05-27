const express = require('express');
const router = express.Router();
require('dotenv').config();
const expressionController = require('../controller/expression');

router.post('/postExpressions', expressionController.postExpressions);


module.exports = router;