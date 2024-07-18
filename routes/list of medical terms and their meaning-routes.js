const express = require('express');
const router = express.Router();
const listofmedicaltermsandtheirmeaningcontroller = require('../contollers/list of medical terms and their meaning-controller');

router.get('/', listofmedicaltermsandtheirmeaningcontroller.getAllglossary);
router.post('/',listofmedicaltermsandtheirmeaningcontroller.createGlossary);

module.exports = router;