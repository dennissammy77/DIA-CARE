const express = require('express');

const router = express.Router();
const { FETCH_USER_DATA } = require("../controllers/user.controller.js");

router.get('/data', FETCH_USER_DATA);

module.exports = router;
