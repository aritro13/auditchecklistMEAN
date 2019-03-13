var express = require('express');
var router = express.Router();
var formdataset = require('../controllers/formdataset');

router.post('/updatevalues', formdataset.updateValues);



router.get('/getvalues', formdataset.getValues);

module.exports = router;
