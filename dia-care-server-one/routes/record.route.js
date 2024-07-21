const express = require('express');

const router = express.Router();
const { SAVE_RECORD, FETCH_RECORDS } = require("../controllers/record.controller.js");

router.post('/save', SAVE_RECORD);
router.get('/data', FETCH_RECORDS);

module.exports = router;
