const express = require('express');

const router = express.Router();
const { NEW_ACCOUNT, SIGNED_IN_USER } = require("../controllers/auth.controller.js");

router.post('/signup', NEW_ACCOUNT);
router.post('/signin', SIGNED_IN_USER);

module.exports = router;
