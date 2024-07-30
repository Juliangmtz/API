const express = require('express');
const router = express.Router();
const listofbestdoctorscontrollers = require('../contollers/list of best doctors-controller');

router.get('/', listofbestdoctorscontrollers.getAllDoctors);
router.post('/', listofbestdoctorscontrollers.createDoctor);
router.get('/professionallicense/:Professionallicense', listofbestdoctorscontrollers.getDoctorsByProfessionallicense);


module.exports = router;
