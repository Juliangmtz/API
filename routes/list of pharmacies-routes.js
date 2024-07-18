const express = require('express');
const router = express.Router();
const listofpharmaciescontroller = require('../contollers/list of pharmacies-controller');

router.get('/', listofpharmaciescontroller.getAllpharmacy);

module.exports = router;