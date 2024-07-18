const express = require('express');
const router = express.Router();
const registerofalldiseasesandtheirsymptomscontroller = require('../contollers/register of all diseases and their symptoms-controller');

router.post('/', registerofalldiseasesandtheirsymptomscontroller.createDisease);
router.get('/', registerofalldiseasesandtheirsymptomscontroller.getAllDiseases);

module.exports = router;