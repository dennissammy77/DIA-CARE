const express = require('express');

const router = express.Router();
const { SAVE_MEAL, FETCH_MEAL_SESSION } = require("../controllers/meal.controller.js");

router.post('/save', SAVE_MEAL);
router.get('/meals', FETCH_MEAL_SESSION);

module.exports = router;
