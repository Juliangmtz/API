const express = require('express');
const router = express.Router();
const tipscontroller = require('../contollers/tips-controller');

router.get('/', tipscontroller.getAlltip);
router.post('/',tipscontroller.createTip);
router.delete('/',tipscontroller.deleteTip);
router.put('/',tipscontroller.updateTipByName);

module.exports = router;